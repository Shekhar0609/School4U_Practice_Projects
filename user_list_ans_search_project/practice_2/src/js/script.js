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

let bodyEl = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function () {
  let containerEl = document.createElement("div");
  containerEl.id = "container";
  containerEl.className =
    "flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg w-100 min-h-30 mt-10";
  bodyEl.appendChild(containerEl);

  let headingEl = document.createElement("h2");
  headingEl.id = "heading";
  headingEl.className = "text-2xl font-semibold";
  headingEl.innerText = "User Directory";
  containerEl.appendChild(headingEl);

  let inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.placeholder = "Search by name or email...";
  inputEl.id = "searchInput";
  inputEl.className = "w-full px-2 py-1";
  containerEl.appendChild(inputEl);
  inputEl.focus();

  let userListContainerEl = document.createElement("div");
  userListContainerEl.id = "userListContainer";
  userListContainerEl.className =
    "w-full flex flex-col gap-3 overflow-y-auto max-h-96";
  containerEl.appendChild(userListContainerEl);

  users.map((user) => {
    let userName = user.name.toLowerCase();
    let userMail = user.email.toLowerCase();
    let profileUrl = user.profileUrl;

    let userDetailsBoxEl = document.createElement("div");
    userDetailsBoxEl.id = "userDetailsBox";
    userDetailsBoxEl.className =
      "flex items-center gap-3 rounded-xl p-2 cursor-pointer hover:bg-gray-300 duration-300";
    userListContainerEl.appendChild(userDetailsBoxEl);

    let profileImgEl = document.createElement("img");
    profileImgEl.src = profileUrl;
    profileImgEl.alt = "profileImg";
    profileImgEl.className = "w-12 h-12 rounded-full object-cover";
    userDetailsBoxEl.appendChild(profileImgEl);

    let userInfoEl = document.createElement("div");
    userInfoEl.id = "userInfo";
    userInfoEl.className = "flex flex-col";
    userDetailsBoxEl.appendChild(userInfoEl);

    let userNameEl = document.createElement("span");
    userNameEl.id = "userName";
    userNameEl.className = "capitalize font-[600]";
    userNameEl.innerText = userName;
    userInfoEl.appendChild(userNameEl);

    let userMailEl = document.createElement("span");
    userMailEl.id = "userMail";
    userMailEl.className = "lowercase";
    userMailEl.innerText = userMail;
    userInfoEl.appendChild(userMailEl);
  });

  searchInput.addEventListener("input", function (e) {
    e.stopPropagation();
    let searchTerm = e.target.value.toLowerCase();
    let userInfo = document.querySelectorAll("#userInfo");

    userInfo.forEach((user) => {
      let name = user.querySelector("#userName").innerText.toLowerCase();
      let email = user.querySelector("#userMail").innerText.toLowerCase();

      if (name.includes(searchTerm) || email.includes(searchTerm)) {
        user.parentElement.style.display = "flex";
      } else {
        user.parentElement.style.display = "none";
      }
    });
  });
});
