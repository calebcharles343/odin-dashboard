const toggleButton = document.querySelector(".nav-toggle-btn");
const navBar = document.getElementById("nav-bar-hidden");

function toggleNavBar() {
  const isHidden = window.getComputedStyle(navBar).display === "none";

  if (isHidden) {
    if (window.innerWidth <= 1024) {
      document.addEventListener("click", handleOutsideClick);
    }
    navBar.style.display = "flex";
  } else {
    navBar.style.display = "none";
    document.removeEventListener("click", handleOutsideClick);
  }
}

function handleOutsideClick(event) {
  if (
    window.innerWidth <= 1024 &&
    !navBar.contains(event.target) &&
    !toggleButton.contains(event.target) &&
    navBar.style.display === "flex"
  ) {
    navBar.style.display = "none";
    document.removeEventListener("click", handleOutsideClick);
  }
}

window.addEventListener("resize", () => {
  navBar.style.display = "none";
});
