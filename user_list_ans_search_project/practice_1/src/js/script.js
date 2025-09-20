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

const searchInput = document.getElementById("searchInput");

document.addEventListener("DOMContentLoaded", function () {
  let userListContainer = document.createElement("ol");
  userListContainer.id = "userListContainer";
  userListContainer.className = "w-full flex flex-col overflow-y-auto max-h-90";
  searchInput.insertAdjacentElement("afterend", userListContainer);

  for (let i = 0; i < users.length; i++) {
    let userDetailsBox = document.createElement("li");
    userDetailsBox.id = "userDetailsBox";
    userDetailsBox.className =
      "flex items-center gap-3 rounded-xl p-2 cursor-pointer hover:bg-gray-300 duration-300";
    userListContainer.appendChild(userDetailsBox);

    let userImage = document.createElement("img");
    userImage.id = "userImage";
    userImage.src = users[i].profileUrl;
    userImage.alt = "User Image";
    userImage.className = "w-13 h-13 rounded-full";
    userDetailsBox.appendChild(userImage);

    let userInfo = document.createElement("div");
    userInfo.id = "userInfo";
    userInfo.className = "flex flex-col";
    userDetailsBox.appendChild(userInfo);

    let userName = document.createElement("span");
    userName.id = "userName";
    userName.className = "capitalize font-[600]";
    userName.innerText = users[i].name;
    userInfo.appendChild(userName);

    let userMail = document.createElement("span");
    userMail.id = "userMail";
    userMail.className = "lowercase";
    userMail.innerText = users[i].email;
    userInfo.appendChild(userMail);
  }
});

searchInput.addEventListener("keyup", serachFuntion);

function serachFuntion(event) {
  event.preventDefault();
  let inputUppercase = searchInput.value.toLowerCase();

  let filterArray = users.map((user) => {
    return (
      user.name.toLowerCase().includes(inputUppercase) ||
      user.email.toLowerCase().includes(inputUppercase)
    );
  });

  let userDetailsBox = document.querySelectorAll("#userDetailsBox");

  userDetailsBox.forEach((box, index) => {
    if (filterArray[index]) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
}
