// cha
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const h2 = document.querySelector("h2");
  h2.classList.toggle("scrolled", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const p = document.querySelector("p");
  p.classList.toggle("scrolled", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const h1 = document.querySelector("h1");
  h1.classList.toggle("scrolled", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const img = document.querySelector("img");
  img.classList.toggle("scrolled", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var img = document.getElementById("image");
  var imgPosition = img.getBoundingClientRect().top;
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (window.scrollY > 0) {
    img.classList.add("scrolled");
  } else {
    setTimeout(function () {
      img.classList.remove("scrolled");
    }, 400);
  }
});

window.addEventListener("scroll", function () {
  var arrow = document.getElementsByClassName("arrow");
  var imgPosition = arrow.getBoundingClientRect().top;
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (window.scrollY > 0) {
    arrow.classList.add("scrolled");
  } else {
    setTimeout(function () {
      arrow.classList.remove("scrolled");
    }, 400);
  }
});

window.addEventListener("scroll", function () {
  var jobTitle = document.getElementsByClassName("jobTitle");
  var imgPosition = jobTitle.getBoundingClientRect().top;
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (window.scrollY > 0) {
    jobTitle.classList.add("scrolled");
  } else {
    setTimeout(function () {
      jobTitle.classList.remove("scrolled");
    }, 400);
  }
});

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.container');
hiddenElements.forEach((el) => observer.observe(el));