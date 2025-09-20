// Sample user data array to demonstrate functionality
const users = [
  {
    profileUrl:
      "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_1280.jpg",
    name: "Pankaj Tripathi",
    email: "pankajmirja@tripathi.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLgW0m3TnEd8WIBSAej73ovDkRXGBukPkaQ&s",
    name: "Munna Bhaiya",
    email: "Munnababu@gmail.com",
  },
  {
    profileUrl:
      "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg",
    name: "Guddu Bhaiya",
    email: "guddupandit@gmail.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLgW0m3TnEd8WIBSAej73ovDkRXGBukPkaQ&s",
    name: "munna don",
    email: "munnadudu@gmail.com",
  },
  {
    profileUrl:
      "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg",
    name: "rastogi roman",
    email: "rastogiroman@gmail.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLgW0m3TnEd8WIBSAej73ovDkRXGBukPkaQ&s",
    name: "jamuna chauhan",
    email: "jamunachauhan@gmail.com",
  },
  {
    profileUrl:
      "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg",
    name: "prem jogi",
    email: "premjogi@gmail.com",
  },
];

const searchInput = document.getElementById("searchInput"); // Input Element

// Function to create and display user list on DOMContentLoaded

document.addEventListener("DOMContentLoaded", function () {
  // Ensure the DOM is fully loaded
  searchInput.focus(); // Focus on the search input field
  let userListContainer = document.createElement("ol"); // Create an ordered list to hold user details
  userListContainer.id = "userListContainer"; // Set ID for the user list container
  userListContainer.className = "w-full flex flex-col overflow-y-auto max-h-90"; // Set class for styling
  searchInput.insertAdjacentElement("afterend", userListContainer); // Insert the user list container after the search input

  // Loop through the users array and create user detail boxes for each user dynamically
  for (let i = 0; i < users.length; i++) {
    let userDetailsBox = document.createElement("li"); // Create a list item for each user
    userDetailsBox.id = "userDetailsBox"; // Set ID for the user details box element
    userDetailsBox.className = // Set class for styling the user details box with Tailwind CSS classes
      "flex items-center gap-3 rounded-xl p-2 cursor-pointer hover:bg-gray-300 duration-300";
    userListContainer.appendChild(userDetailsBox); // Append the user details box to the user list container

    let userImage = document.createElement("img"); // Create an image element for the user's profile picture
    userImage.id = "userImage"; // Set ID for the user image element
    userImage.src = users[i].profileUrl; // Set the source of the image to the user's profile URL
    userImage.alt = "User Image"; // Set alt text for the image
    userImage.className = "w-13 h-13 rounded-full"; // Set class for styling the user image with Tailwind CSS classes
    userDetailsBox.appendChild(userImage); // Append the user image to the user details box element

    let userInfo = document.createElement("div"); // Create a div to hold user information (name and email)
    userInfo.id = "userInfo"; // Set ID for the user info container element
    userInfo.className = "flex flex-col"; // Set class for styling the user info container with Tailwind CSS classes
    userDetailsBox.appendChild(userInfo); // Append the user info container to the user details box element

    let userName = document.createElement("span"); // Create a span element for the user's name
    userName.id = "userName"; // Set ID for the user name element
    userName.className = "capitalize font-[600]"; // Set class for styling the user name with Tailwind CSS classes
    userName.innerText = users[i].name; // Set the inner text of the user name to the user's name
    userInfo.appendChild(userName); // Append the user name to the user info container element

    let userMail = document.createElement("span"); // Create a span element for the user's email address
    userMail.id = "userMail"; // Set ID for the user email element
    userMail.className = "lowercase"; // Set class for styling the user email with Tailwind CSS classes
    userMail.innerText = users[i].email; // Set the inner text of the user email to the user's email address
    userInfo.appendChild(userMail); // Append the user email to the user info container element
  }
});

searchInput.addEventListener("keyup", serachFuntion); // Add event listener to the search input field for 'keyup' event

// Function to filter and display users based on search input value

function serachFuntion(event) {
  // Function to handle search input and filter user list
  event.preventDefault(); // Prevent default behavior of the event (though not strictly necessary for 'keyup' event)
  let inputUppercase = searchInput.value.toLowerCase(); // Get the current value of the search input and convert it to lowercase for case-insensitive comparison

  // Create an array of boolean values indicating whether each user's name or email includes the search input value

  let filterArray = users.map((user) => {
    // Map through the users array to create a new array based on the search criteria
    return (
      // Return true if the user's name or email includes the search input value, otherwise false
      user.name.toLowerCase().includes(inputUppercase) || // Check if the user's name includes the search input value (case-insensitive)
      user.email.toLowerCase().includes(inputUppercase) // Check if the user's email includes the search input value (case-insensitive)
    );
  });

  let userDetailsBox = document.querySelectorAll("#userDetailsBox"); // Select all user details box elements from the DOM
  // Loop through each user details box and set its display style based on the corresponding value in the filterArray array

  userDetailsBox.forEach((box, index) => {
    // Loop through each user details box element and its index in the NodeList
    if (filterArray[index]) {
      // If the corresponding value in the filterArray is true, display the user details box element
      box.style.display = "flex"; // Set display style to 'flex' to show the user details box element
    } else {
      // If the corresponding value in the filterArray is false, hide the user details box element
      box.style.display = "none"; // Set display style to 'none' to hide the user details box element
      let userListContainer = document.querySelector("#userListContainer"); // Select the user list container element from the DOM
      userListContainer.innerText = "no user found"; // Set the inner text of the user list container to indicate that no users were found matching the search criteria
      userListContainer.classList.add("noUserFound"); // Add a class to the user list container for styling purposes (e.g., to style the "no user found" message)
    }
  });
}
