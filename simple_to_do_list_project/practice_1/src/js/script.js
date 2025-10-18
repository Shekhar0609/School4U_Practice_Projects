const bodyElement = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function () {
  bodyElement.className =
    "bg-gray-900 min-h-screen flex items-start justify-center text-white";

  let contaierEl = document.createElement("div");
  contaierEl.id = "container";
  contaierEl.className =
    "bg-gray-800 p-6 rounded-lg shadow-lg mt-5 min-h-100 w-full max-w-lg";
  bodyElement.appendChild(contaierEl);

  let headingEl = document.createElement("h1");
  headingEl.id = "heading";
  headingEl.className = "text-2xl font-bold mb-4 text-center";
  headingEl.textContent = "To-Do List";
  contaierEl.appendChild(headingEl);

  let formEl = document.createElement("form");
  formEl.id = "form";
  formEl.className = "flex mb-4";
  contaierEl.appendChild(formEl);
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
  });

  let inputEl = document.createElement("input");
  inputEl.id = "input";
  inputEl.type = "text";
  inputEl.placeholder = "Add a new task...";
  inputEl.autofocus = true;
  inputEl.className =
    "flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";
  formEl.appendChild(inputEl);

  let addButtonEl = document.createElement("button");
  addButtonEl.id = "addButton";
  addButtonEl.type = "submit";
  addButtonEl.className =
    "bg-blue-500 text-white p-2 rounded-r-lg hover:bg-gray-500 focus:outline-none focus:ring-2";
  addButtonEl.textContent = "Add";
  formEl.appendChild(addButtonEl);

  let taskListContainer = document.createElement("div");
  taskListContainer.id = "taskListContainer";
  taskListContainer.className = "max-h-100 overflow-auto";
  contaierEl.appendChild(taskListContainer);

  function addTask() {
    const taskText = inputEl.value.trim();
    if (taskText !== "") {
      const taskList = document.createElement("ul");
      taskList.id = "taskList";
      taskList.className =
        "flex justify-between items-center gap-2 mb-2 bg-gray-700 p-2 rounded-md";
      taskListContainer.appendChild(taskList);

      const taskItemEl = document.createElement("li");
      taskItemEl.className = "max-h-25 w-full overflow-auto break-all pr-2";
      taskItemEl.textContent = taskText;
      taskList.appendChild(taskItemEl);

      const editCompleteDeleteBox = document.createElement("span");
      editCompleteDeleteBox.id = "editCompleteDeleteBox";
      editCompleteDeleteBox.className = "flex flex-row gap-2";
      taskList.appendChild(editCompleteDeleteBox);

      const editTaskButtonEl = document.createElement("button");
      editTaskButtonEl.id = "editTask";
      editTaskButtonEl.className =
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-gray-400 hover:bg-gray-100 duration-200";
      editTaskButtonEl.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      editCompleteDeleteBox.appendChild(editTaskButtonEl);

      const completeTaskButtonEl = document.createElement("button");
      completeTaskButtonEl.id = "completeTask";
      completeTaskButtonEl.className =
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-green-400 hover:bg-green-100 duration-200";
      completeTaskButtonEl.innerHTML = '<i class="fa-solid fa-check"></i>';
      editCompleteDeleteBox.appendChild(completeTaskButtonEl);

      const deleteTaskEl = document.createElement("button");
      deleteTaskEl.id = "deleteTask";
      deleteTaskEl.className =
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-red-400 hover:bg-red-100 duration-200";
      deleteTaskEl.innerHTML = '<i class="fa-solid fa-trash"></i>';
      editCompleteDeleteBox.appendChild(deleteTaskEl);

      completeTaskButtonEl.addEventListener("click", function () {
        if (taskItemEl.style.textDecoration === "line-through") {
          taskItemEl.style.textDecoration = "none";
          taskItemEl.style.color = "white";
        } else {
          taskItemEl.style.textDecoration = "line-through";
          taskItemEl.style.color = "gray";
        }
      });

      deleteTaskEl.addEventListener("click", function () {
        taskListContainer.removeChild(taskList);
      });

      editTaskButtonEl.addEventListener("click", function () {
        taskItemEl.contentEditable = true;
        taskItemEl.focus();

        taskItemEl.addEventListener("blur", function () {
          taskItemEl.contentEditable = false;
        });
      });

      taskItemEl.addEventListener("dblclick", function () {
        this.style.userSelect = "none";
        this.contentEditable = true;
        this.focus();

        this.addEventListener("blur", function () {
          this.contentEditable = false;
        });
      });

      (function taskItemElHeightHandler() {
        if (taskItemEl.scrollHeight > taskItemEl.clientHeight) {
          editCompleteDeleteBox.classList.remove("flex-row");
          editCompleteDeleteBox.classList.add("flex-col");
        } else {
          editCompleteDeleteBox.classList.remove("flex-col");
          editCompleteDeleteBox.classList.add("flex-row");
        }
      })();

      inputEl.value = "";
      inputEl.focus();
    } else {
      alert("Please enter a task.");
      inputEl.focus();
    }
  }
});
