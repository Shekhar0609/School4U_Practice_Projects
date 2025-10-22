const bodyElement = document.querySelector("body");
let tasksArray = [];

document.addEventListener("DOMContentLoaded", function () {
  bodyElement.className =
    "bg-gray-900 min-h-screen flex items-start justify-center text-white";

  const containerEl = document.createElement("div");
  containerEl.id = "container";
  containerEl.className =
    "bg-gray-800 p-6 rounded-lg shadow-lg mt-5 min-h-100 w-full max-w-lg";
  bodyElement.appendChild(containerEl);

  const headingEl = document.createElement("h2");
  headingEl.id = "heading";
  headingEl.className = "text-2xl font-bold mb-4 text-center";
  headingEl.innerText = "To-Do List";
  containerEl.appendChild(headingEl);

  const inputAddConainerEl = document.createElement("div");
  inputAddConainerEl.id = "inputAddConainer";
  inputAddConainerEl.className = "flex justify-between items-center mb-4";
  containerEl.appendChild(inputAddConainerEl);

  const taskInputEl = document.createElement("input");
  taskInputEl.type = "text";
  taskInputEl.placeholder = "Add a new task...";
  taskInputEl.id = "taskInput";
  taskInputEl.className =
    "flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";
  inputAddConainerEl.appendChild(taskInputEl);

  const addButtonEl = document.createElement("button");
  addButtonEl.id = "addButton";
  addButtonEl.title = "Add Task";
  addButtonEl.innerHTML = '<i class="fa-solid fa-plus"></i>';
  addButtonEl.className =
    "bg-blue-500 text-white px-3 py-2 rounded-r-lg hover:bg-gray-500 focus:outline-none focus:ring-2 cursor-pointer";
  inputAddConainerEl.appendChild(addButtonEl);

  addButtonEl.addEventListener("click", function () {
    if (taskInputEl.value !== "") {
      const taskListContainerEL = document.createElement("div");
      taskListContainerEL.id = "taskListContainer";
      taskListContainerEL.className = "max-h-100 overflow-auto";
      containerEl.appendChild(taskListContainerEL);

      const taskListEl = document.createElement("ul");
      taskListEl.id = "taskList";
      taskListEl.className =
        "flex justify-between items-center gap-2 mb-2 bg-gray-700 p-2 rounded-md";
      taskListContainerEL.appendChild(taskListEl);

      const taskEL = document.createElement("li");
      taskEL.id = "task";
      taskEL.className = "max-h-25 w-full overflow-auto break-all pr-2";
      taskEL.innerText = taskInputEl.value;
      taskListEl.appendChild(taskEL);

      const editCompleteDeleteButtonsEl = document.createElement("div");
      editCompleteDeleteButtonsEl.id = "editCompleteDeleteButtons";
      editCompleteDeleteButtonsEl.className = "flex flex-row gap-2";
      taskListEl.appendChild(editCompleteDeleteButtonsEl);

      const editTaskEL = document.createElement("button");
      editTaskEL.id = "editTask";
      editTaskEL.className =
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-gray-400 hover:bg-gray-100 duration-200";
      editTaskEL.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      editCompleteDeleteButtonsEl.appendChild(editTaskEL);

      const completeTaskEL = document.createElement("button");
      completeTaskEL.id = "completeTask";
      completeTaskEL.className =
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-green-400 hover:bg-green-100 duration-200";
      completeTaskEL.innerHTML = '<i class="fa-solid fa-check"></i>';
      editCompleteDeleteButtonsEl.appendChild(completeTaskEL);

      const deleteTaskEL = document.createElement("button");
      deleteTaskEL.id = "deleteTask";
      deleteTaskEL.className =
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-red-400 hover:bg-red-100 duration-200";
      deleteTaskEL.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      editCompleteDeleteButtonsEl.appendChild(deleteTaskEL);

      updateTask(taskInputEl.value);

      function updateTask(inputTask) {
        tasksArray.push({
          id: tasksArray.length + 1,
          isCompleted: false,
          task: inputTask,
        });
        console.log(tasksArray);
      }

      function editTaskFunction() {
        if (taskEL.classList.contains("task-completed")) {
          taskEL.contentEditable = false;
          alert("please change to the uncompleted task.");
        } else {
          taskEL.contentEditable = true;
          taskEL.focus();
        }
      }

      editTaskEL.addEventListener("click", editTaskFunction);

      taskEL.addEventListener("dblclick", editTaskFunction);

      taskEL.addEventListener("blur", () => {
        taskEL.contentEditable = false;

        tasksArray.forEach((taskArray) => {
          if (taskArray.task !== taskEL.innerText) {
            taskArray.task = taskEL.innerText;
          }
        });
        console.log(tasksArray);
      });

      deleteTaskEL.addEventListener("click", () => {
        console.log(taskEL.isContentEditable);
        if (
          taskEL.classList.contains("task-completed") ||
          taskEL.isContentEditable
        ) {
          taskListEl.remove();
          tasksArray = tasksArray.filter((taskArray) => {
            return taskArray.task !== taskEL.innerText;
          });
          console.log(tasksArray);
        } else {
          alert("Please save the task and completed it");
        }
      });

      completeTaskEL.addEventListener("click", function () {
        if (!taskEL.classList.contains("task-completed")) {
          taskEL.classList.add("task-completed");
        } else {
          taskEL.classList.remove("task-completed");
        }

        tasksArray.forEach((taskArray) => {
          if (taskArray.task === taskEL.innerText) {
            taskArray.isCompleted = !taskArray.isCompleted;
          }
        });
        console.log(tasksArray);
      });
    } else {
      alert("Please eneter a Task");
    }
    taskInputEl.value = "";
    taskInputEl.focus();
  });

  taskInputEl.focus();
});
