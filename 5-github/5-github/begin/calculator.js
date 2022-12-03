let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  /* concole.log(value); bize tikladigimiz tusun ne oldugunu soyler*/
  if (isNaN(value)) {
    // this is not a number
    handleSymbol(value);
  } else {
    // this is a number
    handleNumber(value);
  }
  screen.innerText = buffer; /* ekranda rakamlar yazar */
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parceInt(buffer))
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = "0";
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer =
    parseInt(buffer); /* string sayiya dondu +buffer da yazabiliriz*/
  if (runningTotal === "0") {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator == "+") {
    runningTotal += intBuffer;
  } else if (previousOperator == "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator == "*") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
  /* console.log("buffer", buffer);  rakamlarin dogru oldugunu kontrol eder*/
}

/* html section bolumundeki tuslarda bir tiklama var mi?*/
function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      /* concole.log(event); bize komut gecmisini verir */
      buttonClick(event.target.innerText);
    });
}

init();
