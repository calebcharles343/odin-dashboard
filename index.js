const toggleButton = document.querySelector(".nav-toggle-btn");
const navBar = document.getElementById("nav-bar");
const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
const div4 = document.querySelector(".div-4");
const isHidden = window.getComputedStyle(navBar).display === "none";

function toggleNavBar() {
  // nav.classList.toggle("active");
  div1.classList.toggle("logoActive");
  div2.classList.toggle("logoActive");
  div3.classList.toggle("logoActive");
  div4.classList.toggle("logoActive");

  if (isHidden) {
    navBar.style.display = "flex";
    navBar.style.position = "absolute";
    navBar.style.top = "0";
    navBar.style.left = "0";
    navBar.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.5)";

    if (window.innerWidth <= 1024) {
      document.addEventListener("click", handleOutsideClick);
    }
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
  location.reload();
});
/* 
  width: 20rem;
    position: absolute;

    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    z-index: 80000;
*/
