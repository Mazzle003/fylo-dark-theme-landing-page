function handleMenuOpen() {
  mobileMenu.style.display = "none";
  menu.style.display = "block";
}

function handleMenuClose() {
  mobileMenu.style.display = "block";
  menu.style.display = "none";
}

document.addEventListener("click", (e) => {
  console.log(e.type);
  console.log(e.target);
});