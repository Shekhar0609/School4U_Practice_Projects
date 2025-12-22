const toDoInput = document.getElementById("toDoInput");
const addBtn = document.getElementById("addBtn");
const taskListsEL = document.getElementById("taskLists");
const mainEl = document.getElementById("toDoListContainer");

let API_URL = "https://694802c61ee66d04a44e786a.mockapi.io/api/v1/todo";

fetchTasks();

addBtn.addEventListener("click", function () {
  let taskValue = toDoInput.value.trim();
  if (taskValue !== "") {
    toDoInput.classList.remove("outline-red-500");
    toDoInput.classList.add("outline-green-500");
    postData(taskValue);
  } else {
    toDoInput.focus();
    toDoInput.classList.add("outline-red-500");
    toDoInput.classList.remove("outline-green-500");
    return alert("Please enter the Taask");
  }
});

async function fetchTasks() {
  let response = await fetch(API_URL);
  let data = await response.json();

  taskListsEL.innerHTML = "";

  if (data) {
    data.forEach((taskItem) => {
      const taskListEl = document.createElement("li");
      taskListEl.id = "taskList";
      taskListEl.classList.add(
        "flex",
        "justify-between",
        "gap-1",
        "w-full",
        "h-25",
        "mb-2",
        "p-2",
        "bg-gray-700",
        "rounded-lg"
      );
      taskListsEL.append(taskListEl);

      const taskEl = document.createElement("span");
      taskEl.id = "task";
      taskEl.classList.add(
        "inline-block",
        "w-full",
        "h-full",
        "text-white",
        "text-wrap",
        "overflow-y-auto"
      );
      taskEl.textContent = taskItem.taskText;
      taskListEl.append(taskEl);
      toDoInput.value = "";

      const buttonContainerEl = document.createElement("div");
      buttonContainerEl.id = "buttonContainer";
      buttonContainerEl.classList.add(
        "inline-flex",
        "flex-col",
        "justify-baseline",
        "items-start",
        "gap-3",
        "px-1"
      );
      taskListEl.append(buttonContainerEl);

      const editBtnEl = document.createElement("button");
      editBtnEl.id = "editBtn";
      editBtnEl.className =
        "bg-blue-400 hover:bg-blue-300 hover:cursor-pointer hover:scale-120 duration-300 rounded-sm p-0.5";
      editBtnEl.innerHTML = `<i class="fas fa-edit"></i>`;
      buttonContainerEl.append(editBtnEl);

      const trashEl = document.createElement("button");
      trashEl.id = "trashEl";
      trashEl.className =
        "bg-red-400 hover:bg-red-300 hover:cursor-pointer hover:scale-120 duration-300 rounded-sm p-0.5";
      trashEl.innerHTML = `<i class="fas fa-trash-alt"></i>`;
      buttonContainerEl.append(trashEl);

      function editAndCheckTask() {
        const isDisabled = taskEl.hasAttribute("contenteditable");
        if (isDisabled) {
          taskEl.removeAttribute("contenteditable");
          editBtnEl.innerHTML = `<i class="fas fa-edit"></i>`;
          editBtnEl.classList.remove(
            "text-green-400",
            "hover:bg-green-500",
            "outline-green",
            "hover:text-green-200"
          );
          editBtnEl.classList.add("bg-blue-400", "hover:bg-blue-300");
          console.log(editBtnEl);
        } else {
          taskEl.setAttribute("contenteditable", "true");
          taskEl.focus();
          editBtnEl.innerHTML = `<i class="fas fa-check-circle"></i>`;
          editBtnEl.classList.remove("bg-blue-400", "hover:bg-blue-300");
          editBtnEl.classList.add(
            "text-green-400",
            "hover:bg-green-500",
            "outline-green",
            "hover:text-green-200"
          );
        }
      }

      trashEl.addEventListener("click", () => {
        taskListEl.remove();
      });

      editBtnEl.addEventListener("click", editAndCheckTask);
    });
  } else {
    const noTaskEl = document.createElement("p");
    noTaskEl.classList.add("text-white", "text-center", "mt-4");
    noTaskEl.textContent = "No Tasks Available. Please add a task.";
    mainEl.append(noTaskEl);
  }
}

async function postData(taskValue) {
  let taskData = {
    taskText: taskValue,
  };

  let response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  let data = await response.json();
  if (response.ok) {
    fetchTasks();
  } else {
    alert("Error adding task: " + data.message);
  }
}
