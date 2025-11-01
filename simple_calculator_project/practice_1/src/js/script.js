let bodyEL = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  bodyEL.className =
    "bg-gray-900 text-white flex flex-col justify-center items-center h-screen";

  const titleEL = document.createElement("h1");
  titleEL.className = "text-4xl mb-6";
  titleEL.textContent = "Simple Calculator Project";
  bodyEL.appendChild(titleEL);

  const containerEL = document.createElement("div");
  containerEL.id = "container";
  containerEL.className = "bg-gray-800 p-4 rounded-lg shadow-lg w-75 h-fit";
  bodyEL.appendChild(containerEL);

  const spanEL = document.createElement("span");
  spanEL.id = "result";
  spanEL.className =
    "block text-2xl bg-black w-full h-25 text-right break-words rounded-md p-1 overflow-auto mb-2";
  containerEL.appendChild(spanEL);

  const buttonsContainerEL = document.createElement("div");
  buttonsContainerEL.id = "buttons-container";
  buttonsContainerEL.className =
    "grid grid-cols-4 gap-2 text-center text-2xl user-select-none";
  containerEL.appendChild(buttonsContainerEL);

  const buttons = [
    "C",
    "+",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "/",
    "0",
    ".",
    "=",
  ];

  buttons.forEach((buttonText) => {
    const buttonEL = document.createElement("button");
    buttonEL.textContent = buttonText;
    buttonEL.id = `button-${buttonText}`;
    buttonEL.className =
      "bg-gray-700 hover:bg-gray-600 active:scale-90 duration-300 text-white font-bold py-4 rounded-md shadow-md cursor-pointer";

    buttonsContainerEL.appendChild(buttonEL);

    if (buttonText === "C") {
      buttonEL.classList.remove("bg-gray-700", "hover:bg-gray-600");
      buttonEL.classList.add("col-span-3");
      buttonEL.classList.add("bg-red-500", "hover:bg-red-700");
      buttonEL.id = "button-clear";
    }

    if (buttonText === "=") {
      buttonEL.classList.remove("bg-gray-700", "hover:bg-gray-600");
      buttonEL.classList.add("bg-green-500", "hover:bg-green-700");
      buttonEL.classList.add("col-span-2");
      buttonEL.id = "button-equals";
    }

    if (
      buttonText === "+" ||
      buttonText === "-" ||
      buttonText === "*" ||
      buttonText === "/"
    ) {
      buttonEL.classList.remove("bg-gray-700", "hover:bg-gray-600");
      buttonEL.classList.add("bg-yellow-500", "hover:bg-[#cbaa24a5]");
      buttonEL.id = `button-operator-${buttonText}`;
    }

    if (
      buttonText === "1" ||
      buttonText === "2" ||
      buttonText === "3" ||
      buttonText === "4" ||
      buttonText === "5" ||
      buttonText === "6" ||
      buttonText === "7" ||
      buttonText === "8" ||
      buttonText === "9" ||
      buttonText === "0" ||
      buttonText === "."
    ) {
      buttonEL.id = `button-number`;
    }

    let resultEL = document.getElementById("result");

    buttonEL.addEventListener("click", () => {
      if (
        (resultEL.textContent === "0" && buttonEL.textContent !== ".") ||
        resultEL.textContent === "Error" ||
        resultEL.textContent === "Cannot divide by zero"
      ) {
        resultEL.textContent = buttonEL.textContent;
      } else if (resultEL.textContent === "." && buttonEL.textContent === ".") {
        resultEL.textContent = "0" + buttonEL.textContent;
      } else {
        resultEL.textContent += buttonEL.textContent;
      }

      if (buttonEL.textContent === "C") {
        resultEL.textContent = "";
      } else if (buttonEL.textContent === "=") {
        try {
          if (resultEL.textContent.includes("/0")) {
            resultEL.textContent = "Cannot divide by zero";
            return;
          }

          resultEL.textContent = eval(resultEL.textContent.slice(0, -1));
        } catch (error) {
          resultEL.textContent = "Error";
        }
      }
    });
  });
});
