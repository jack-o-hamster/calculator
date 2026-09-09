const calculator_box = document.querySelector(".calculator");
const calculator_text = document.getElementById("display");
let a = "";
let b = "";
let op = "";
calculator_box.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    if (calculator_text.textContent === "0") {
      calculator_text.textContent = "";
    }
    const calculator_button = event.target.textContent;
    calculator_text.textContent += calculator_button;
    if (calculator_text.textContent.includes("C")) {
      calculator_text.textContent = "";
    }
    if (
      calculator_text.textContent.includes("+") ||
      calculator_text.textContent.includes("-") ||
      calculator_text.textContent.includes("/") ||
      calculator_text.textContent.includes("*")
    ) {
      if (calculator_text.textContent.includes("+") && op === "") {
        op += "+";
      } else if (calculator_text.textContent.includes("-") && op === "") {
        op += "-";
      } else if (calculator_text.textContent.includes("/") && op === "") {
        op += "/";
      } else if (calculator_text.textContent.includes("*") && op === "") {
        op += "*";
      }
      a = calculator_text.textContent.slice(0, -1);
      calculator_text.textContent = "";
      alert(a);
      alert(op);
    }
    if (calculator_text.textContent.includes("=")) {
      b = calculator_text.textContent.slice(0, -1);
      alert(b);
      if (op === "+") {
        calculator_text.textContent = +a + +b;
      } else if (op === "*") {
        calculator_text.textContent = +a * +b;
      } else if (op === "/") {
        calculator_text.textContent = +a / +b;
      } else if (op === "-") {
        calculator_text.textContent = +a - +b;
      }
      op = "";
    }
  }
});
