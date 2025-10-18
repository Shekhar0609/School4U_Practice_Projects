const bodyElement = document.querySelector("body"); // Select the body element of the document

document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded
  bodyElement.className = // Set the class name for the body element
    "bg-gray-900 min-h-screen flex items-start justify-center text-white"; // Tailwind CSS classes for styling

  let contaierEl = document.createElement("div"); // Create a new div element for the container element
  contaierEl.id = "container"; // Set the id attribute for the container element
  contaierEl.className = // Set the class name for the container element
    "bg-gray-800 p-6 rounded-lg shadow-lg mt-5 min-h-100 w-full max-w-lg"; // Tailwind CSS classes for styling
  bodyElement.appendChild(contaierEl); // Append the container element to the body element

  let headingEl = document.createElement("h1"); // Create a new h1 element for the heading
  headingEl.id = "heading"; // Set the id attribute for the heading element
  headingEl.className = "text-2xl font-bold mb-4 text-center"; // Set the class name for the heading element
  headingEl.textContent = "To-Do List"; // Set the text content for the heading element
  contaierEl.appendChild(headingEl); // Append the heading element to the container element

  let formEl = document.createElement("form"); // Create a new form element
  formEl.id = "form"; // Set the id attribute for the form element
  formEl.className = "flex mb-4"; // Set the class name for the form element
  contaierEl.appendChild(formEl); // Append the form element to the container element
  formEl.addEventListener("submit", function (e) {
    // Add an event listener for the form submission
    e.preventDefault(); // Prevent the default form submission behavior
    addTask(); // Call the addTask function to add a new task
  });

  let inputEl = document.createElement("input"); // Create a new input element for task entry
  inputEl.id = "input"; // Set the id attribute for the input element
  inputEl.type = "text"; // Set the type attribute for the input element
  inputEl.placeholder = "Add a new task..."; // Set the placeholder text for the input element
  inputEl.autofocus = true; // Set the autofocus attribute for the input element
  inputEl.className = // Set the class name for the input element
    "flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"; // Tailwind CSS classes for styling
  formEl.appendChild(inputEl); // Append the input element to the form element

  let addButtonEl = document.createElement("button"); // Create a new button element for adding tasks element
  addButtonEl.id = "addButton"; // Set the id attribute for the add button element
  addButtonEl.type = "submit"; // Set the type attribute for the add button element
  addButtonEl.className = // Set the class name for the add button element
    "bg-blue-500 text-white p-2 rounded-r-lg hover:bg-gray-500 focus:outline-none focus:ring-2"; // Tailwind CSS classes for styling
  addButtonEl.textContent = "Add"; // Set the text content for the add button element
  formEl.appendChild(addButtonEl); // Append the add button element to the form element

  let taskListContainer = document.createElement("div"); // Create a new div element for the task list container
  taskListContainer.id = "taskListContainer"; // Set the id attribute for the task list container element
  taskListContainer.className = "max-h-100 overflow-auto"; // Set the class name for the task list container element
  contaierEl.appendChild(taskListContainer); // Append the task list container element to the container element

  // Function to add a new task to the task list
  function addTask() {
    const taskText = inputEl.value.trim(); // Get the trimmed value of the input element
    if (taskText !== "") {
      // Check if the task text is not empty
      const taskList = document.createElement("ul"); // Create a new ul element for the task list
      taskList.id = "taskList"; // Set the id attribute for the task list element
      taskList.className = // Set the class name for the task list element
        "flex justify-between items-center gap-2 mb-2 bg-gray-700 p-2 rounded-md"; // Tailwind CSS classes for styling
      taskListContainer.appendChild(taskList); // Append the task list element to the task list container element

      const taskItemEl = document.createElement("li"); // Create a new li element for the task item
      taskItemEl.className = "max-h-25 w-full overflow-auto break-all pr-2"; // Set the class name for the task item element
      taskItemEl.textContent = taskText; // Set the text content for the task item element
      taskList.appendChild(taskItemEl); // Append the task item element to the task list element

      const editCompleteDeleteBox = document.createElement("span"); // Create a new span element for the edit, complete, and delete buttons container
      editCompleteDeleteBox.id = "editCompleteDeleteBox"; // Set the id attribute for the edit, complete, and delete buttons container element
      editCompleteDeleteBox.className = "flex flex-row gap-2"; // Set the class name for the edit, complete, and delete buttons container element
      taskList.appendChild(editCompleteDeleteBox); // Append the edit, complete, and delete buttons container element to the task list element

      const editTaskButtonEl = document.createElement("button"); // Create a new button element for editing the task
      editTaskButtonEl.id = "editTask"; // Set the id attribute for the edit task button element
      editTaskButtonEl.className = // Set the class name for the edit task button element
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-gray-400 hover:bg-gray-100 duration-200"; // Tailwind CSS classes for styling
      editTaskButtonEl.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'; // Set the inner HTML for the edit task button element
      editCompleteDeleteBox.appendChild(editTaskButtonEl); // Append the edit task button element to the edit, complete, and delete buttons container element

      const completeTaskButtonEl = document.createElement("button"); // Create a new button element for completing the task
      completeTaskButtonEl.id = "completeTask"; // Set the id attribute for the complete task button element
      completeTaskButtonEl.className = // Set the class name for the complete task button element
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-green-400 hover:bg-green-100 duration-200"; // Tailwind CSS classes for styling
      completeTaskButtonEl.innerHTML = '<i class="fa-solid fa-check"></i>'; // Set the inner HTML for the complete task button element
      editCompleteDeleteBox.appendChild(completeTaskButtonEl); // Append the complete task button element to the edit, complete, and delete buttons container element

      const deleteTaskEl = document.createElement("button"); // Create a new button element for deleting the task
      deleteTaskEl.id = "deleteTask"; // Set the id attribute for the delete task button element
      deleteTaskEl.className = // Set the class name for the delete task button element
        "flex justify-baseline items-center gap-2 p-1 rounded-md cursor-pointer bg-gray-500 active:scale-90 hover:text-red-400 hover:bg-red-100 duration-200"; // Tailwind CSS classes for styling
      deleteTaskEl.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Set the inner HTML for the delete task button element
      editCompleteDeleteBox.appendChild(deleteTaskEl); // Append the delete task button element to the edit, complete, and delete buttons container element

      // Event listeners for complete, delete, and edit buttons functionality
      completeTaskButtonEl.addEventListener("click", function () {
        // Add event listener for completing the task
        if (taskItemEl.style.textDecoration === "line-through") {
          // Check if the task item is already marked as completed
          taskItemEl.style.textDecoration = "none"; // Remove the line-through style
          taskItemEl.style.color = "white"; // Reset the text color
        } else {
          // If the task item is not marked as completed
          taskItemEl.style.textDecoration = "line-through"; // Add the line-through style
          taskItemEl.style.color = "gray"; // Change the text color to gray
        }
      });

      /// Event listener for deleting the task
      deleteTaskEl.addEventListener("click", function () {
        // Add event listener for deleting the task
        taskListContainer.removeChild(taskList); // Remove the task list element from the task list container element
      });

      // Event listener for editing the task
      editTaskButtonEl.addEventListener("click", function () {
        // Add event listener for editing the task
        taskItemEl.contentEditable = true; // Make the task item element content editable
        taskItemEl.focus(); // Focus on the task item element

        // Event listener for when the task item element loses focus
        taskItemEl.addEventListener("blur", function () {
          // When the task item element loses focus
          taskItemEl.contentEditable = false; // Make the task item element content non-editable
        });
      });

      // Event listener for double-clicking the task item to edit
      taskItemEl.addEventListener("dblclick", function () {
        // Add event listener for double-clicking the task item element
        this.style.userSelect = "none"; // Disable text selection
        this.contentEditable = true; // Make the task item element content editable
        this.focus(); // Focus on the task item element

        // Event listener for when the task item element loses focus
        this.addEventListener("blur", function () {
          // When the task item element loses focus
          this.contentEditable = false; // Make the task item element content non-editable
        });
      });

      // Adjust the layout of the edit, complete, and delete buttons based on the height of the task item element
      (function taskItemElHeightHandler() {
        // Immediately invoked function to handle the height of the task item element
        if (taskItemEl.scrollHeight > taskItemEl.clientHeight) {
          // Check if the scroll height is greater than the client height
          editCompleteDeleteBox.classList.remove("flex-row"); // Remove the flex-row class
          editCompleteDeleteBox.classList.add("flex-col"); // Add the flex-col class
        } else {
          // If the scroll height is not greater than the client height
          editCompleteDeleteBox.classList.remove("flex-col"); // Remove the flex-col class
          editCompleteDeleteBox.classList.add("flex-row"); // Add the flex-row class
        }
      })(); // End of taskItemElHeightHandler function

      // Clear the input field and focus back on it
      inputEl.value = ""; // Clear the input field
      inputEl.focus(); // Focus back on the input field
    } else {
      // If the task text is empty
      alert("Please enter a task."); // Alert the user to enter a task
      inputEl.focus(); // Focus back on the input field
    }
  }
});
