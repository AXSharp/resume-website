function cb() {
  var checkedValue = document.querySelector(".checkbox:checked");
  var navbar = document.getElementById("nav-bar");
  if (checkedValue) {
    navbar.classList.add("checked");
  } else {
    navbar.classList.remove("checked");
  }
}
