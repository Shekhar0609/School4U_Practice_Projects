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

let bodyEl = document.querySelector("body"); // Select the body element of the document

// Wait for the DOM to fully load before executing the script to ensure all elements are accessible
document.addEventListener("DOMContentLoaded", function () {
  // DOM ready event
  let containerEl = document.createElement("div"); // Create a new div element to serve as the main container element
  containerEl.id = "container"; // Assign an ID to the container element for easy reference later
  containerEl.className =
    "flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg w-100 min-h-30 mt-10"; // Add multiple Tailwind CSS classes to style the container element
  bodyEl.appendChild(containerEl); // Append the container element to the body of the document to make it visible on the webpage

  let headingEl = document.createElement("h2"); // Create a new h2 element to serve as the heading of the user directory section
  headingEl.id = "heading"; // Assign an ID to the heading element for easy reference later
  headingEl.className = "text-2xl font-semibold"; // Add Tailwind CSS classes to style the heading element with larger font size and bold weight
  headingEl.innerText = "User Directory"; // Set the text content of the heading element to "User Directory" to indicate the purpose of this section
  containerEl.appendChild(headingEl); // Append the heading element to the container element to make it visible within the user directory section on the webpage

  let inputEl = document.createElement("input"); // Create a new input element to serve as the search input field for filtering users by name or email address
  inputEl.id = "searchInput"; // Assign an ID to the input element for easy reference later
  inputEl.type = "text"; // Set the type attribute of the input element to "text" to allow users to enter text input for searching users
  inputEl.placeholder = "Search by name or email..."; // Set the placeholder attribute of the input element to provide a hint to users about what they can search for in this field
  inputEl.className = "w-full px-2 py-1"; // Add Tailwind CSS classes to style the input element with full width and padding for better usability and appearance
  containerEl.appendChild(inputEl); // Append the input element to the container element to make it visible within the user directory section on the webpage so users can interact with it to search for users by name or email address
  inputEl.focus(); // Automatically focus the input element when the page loads to improve user experience by allowing users to start typing their search query immediately without needing to click on the input field first

  let userListContainerEl = document.createElement("div"); // Create a new div element to serve as the container for the list of user details boxes
  userListContainerEl.id = "userListContainer"; // Assign an ID to the user list container element for easy reference later
  userListContainerEl.className =
    "w-full flex flex-col gap-3 overflow-y-auto max-h-96"; // Add multiple Tailwind CSS classes to style the user list container element with full width, vertical layout, spacing between items, vertical scrolling, and maximum height to ensure it fits within the viewport
  containerEl.appendChild(userListContainerEl); // Append the user list container element to the main container element to make it visible within the user directory section on the webpage so users can see the list of user details boxes on the webpage

  // Iterate over the users array to create and append user details boxes to the user list container element for each user in the array
  users.map((user) => {
    // Use the map function to iterate over each user object in the users array and create a user details box for each user
    let userName = user.name.toLowerCase(); // Convert the user's name to lowercase for consistent display and easier searching later on
    let userMail = user.email.toLowerCase(); // Convert the user's email address to lowercase for consistent display and easier searching later on
    let profileUrl = user.profileUrl; // Get the URL of the user's profile image from the user object to display it in the user details box

    let userDetailsBoxEl = document.createElement("div"); // Create a new div element to serve as the user details box for the current user in the iteration
    userDetailsBoxEl.id = "userDetailsBox"; // Assign an ID to the user details box element for easy reference later (if needed)
    userDetailsBoxEl.className =
      "flex items-center gap-3 rounded-xl p-2 cursor-pointer hover:bg-gray-300 duration-300"; // Add multiple Tailwind CSS classes to style the user details box element with horizontal layout, spacing between items, rounded corners, padding, pointer cursor on hover, background color change on hover, and smooth transition effect for better user experience on hover
    userListContainerEl.appendChild(userDetailsBoxEl); // Append the user details box element to the user list container element to make it visible within the user directory section on the webpage so users can see the details of each user in the list on the webpage

    let profileImgEl = document.createElement("img"); // Create a new img element to display the user's profile image within the user details box element
    profileImgEl.src = profileUrl; // Set the src attribute of the profile image element to the URL of the user's profile image to load and display the image in the user details box element
    profileImgEl.alt = "profileImg"; // Set the alt attribute of the profile image element to provide alternative text for the image in case it fails to load or for accessibility purposes
    profileImgEl.className = "w-12 h-12 rounded-full object-cover"; // Add multiple Tailwind CSS classes to style the profile image element with fixed width and height, rounded shape, and object-fit property to ensure the image covers the entire area without distortion
    userDetailsBoxEl.appendChild(profileImgEl); // Append the profile image element to the user details box element to make it visible within the user details box on the webpage so users can see the profile image of each user in the list on the webpage

    let userInfoEl = document.createElement("div"); // Create a new div element to serve as the container for the user's name and email address within the user details box element
    userInfoEl.id = "userInfo"; // Assign an ID to the user info element for easy reference later (if needed)
    userInfoEl.className = "flex flex-col"; // Add Tailwind CSS classes to style the user info element with vertical layout to stack the user's name and email address vertically within the user details box element for better readability and organization on the webpage
    userDetailsBoxEl.appendChild(userInfoEl); // Append the user info element to the user details box element to make it visible within the user details box on the webpage so users can see the name and email address of each user in the list on the webpage

    let userNameEl = document.createElement("span"); // Create a new span element to display the user's name within the user info element of the user details box element
    userNameEl.id = "userName"; // Assign an ID to the user name element for easy reference later (if needed)
    userNameEl.className = "capitalize font-[600]"; // Add Tailwind CSS classes to style the user name element with capitalized text and semi-bold font weight for better visibility and emphasis on the user's name within the user details box element on the webpage
    userNameEl.innerText = userName; // Set the text content of the user name element to the user's name to display it within the user details box element on the webpage so users can see the name of each user in the list on the webpage in a readable format with proper capitalization for better presentation on the webpage and user experience on the webpage
    userInfoEl.appendChild(userNameEl); // Append the user name element to the user info element to make it visible within the user details box on the webpage so users can see the name of each user in the list on the webpage

    let userMailEl = document.createElement("span"); // Create a new span element to display the user's email address within the user info element of the user details box element
    userMailEl.id = "userMail"; // Assign an ID to the user email element for easy reference later (if needed)
    userMailEl.className = "lowercase"; // Add Tailwind CSS classes to style the user email element with lowercase text for consistent display of email addresses within the user details box element on the webpage so users can easily read and recognize email addresses in a standard format on the webpage for better presentation on the webpage and user experience on the webpage
    userMailEl.innerText = userMail; // Set the text content of the user email element to the user's email address to display it within the user details box element on the webpage so users can see the email address of each user in the list on the webpage in a readable format with proper lowercase for better presentation on the webpage and user experience on the webpage
    userInfoEl.appendChild(userMailEl); // Append the user email element to the user info element to make it visible within the user details box on the webpage so users can see the email address of each user in the list on the webpage
  });

  let searchInput = document.getElementById("searchInput"); // Select the search input element by its ID for adding an event listener to it for filtering users based on the search term entered by the user in real-time as they type in the input field on the webpage
  // Add an event listener to the search input element to filter the displayed users based on the search term entered by the user in real-time as they type in the input field

  searchInput.addEventListener("input", function (e) {
    // Add an event listener to the search input element to listen for the "input" event, which is triggered whenever the user types or modifies the text in the input field, allowing us to filter the displayed users based on the search term entered by the user in real-time as they type in the input field on the webpage
    e.stopPropagation(); // Stop the propagation of the input event to prevent it from bubbling up to parent elements, ensuring that only the intended event handler for the search input element is executed when the user types or modifies the text in the input field on the webpage
    let searchTerm = e.target.value.toLowerCase(); // Get the current value of the search input field, convert it to lowercase for case-insensitive searching, and store it in the searchTerm variable for filtering the displayed users based on the search term entered by the user in real-time as they type in the input field on the webpage
    let userInfo = document.querySelectorAll("#userInfo"); // Select all elements with the ID "userInfo" (which contains the user's name and email address) to iterate over them and filter the displayed users based on the search term entered by the user in real-time as they type in the input field on the webpage

    //  Iterate over each userInfo element to check if the user's name or email address includes the search term entered by the user in the search input field and show/hide the corresponding user details box accordingly
    userInfo.forEach((user) => {
      // Iterate over each userInfo element to check if the user's name or email address includes the search term entered by the user in the search input field and show/hide the corresponding user details box accordingly on the webpage
      let name = user.querySelector("#userName").innerText.toLowerCase(); // Get the user's name from the userInfo element, convert it to lowercase for case-insensitive searching, and store it in the name variable for checking if it includes the search term entered by the user in the search input field on the webpage
      let email = user.querySelector("#userMail").innerText.toLowerCase(); // Get the user's email address from the userInfo element, convert it to lowercase for case-insensitive searching, and store it in the email variable for checking if it includes the search term entered by the user in the search input field on the webpage

      // Check if the user's name or email address includes the search term entered by the user in the search input field and show/hide the corresponding user details box accordingly on the webpage
      if (name.includes(searchTerm) || email.includes(searchTerm)) {
        user.parentElement.style.display = "flex"; // Show the user details box by setting its display style to "flex" if the user's name or email address includes the search term entered by the user in the search input field on the webpage
      } else {
        user.parentElement.style.display = "none"; // Hide the user details box by setting its display style to "none" if the user's name or email address does not include the search term entered by the user in the search input field on the webpage
      }
    });
  });
});
