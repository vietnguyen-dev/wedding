//opening and closing the menu
const menuIcon = document.getElementById("menu-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");
const menuList = document.getElementById("nav-list");

function openNav() {
  menuList.classList.remove("hidden");
  menuIcon.classList.add("hidden");
  menuCloseIcon.classList.remove("hidden");
}

function closeNav() {
  menuList.classList.add("hidden");
  menuIcon.classList.remove("hidden");
  menuCloseIcon.classList.add("hidden");
}

menuIcon.addEventListener("click", openNav);
menuCloseIcon.addEventListener("click", closeNav);

//window resize and load listener to remove hidden class
function adjustNav() {
  if (window.innerWidth >= 768) {
    menuList.classList.remove("hidden");
    menuList.classList.add("flex");
    menuIcon.classList.add("hidden");
    menuCloseIcon.classList.add("hidden");
  } else {
    menuList.classList.remove("flex");
    menuList.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  }
}
window.addEventListener("load", adjustNav);
window.addEventListener("resize", adjustNav);

//rsvp inputs and form
const nameEl = document.getElementById("name");
const phoneEl = document.getElementById("phone");
const attendeesEl = document.getElementById("attendees");
const rsvp = document.getElementById("rsvp-form");

let nameVal = "";
let phoneVal = "";
let attendeesVal = 0;

nameEl.addEventListener("input", () => {
  nameVal = nameEl.value;
});

phoneEl.addEventListener("input", (e) => {
  phoneVal = e.target.value;
});

attendeesEl.addEventListener("input", (e) => {
  attendeesVal = e.target.value;
});

rsvp.addEventListener("submit", async (e) => {
  e.preventDefault();
  window.location.href = "thanks.html";
});
