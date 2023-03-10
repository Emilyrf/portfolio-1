//Hamburguer menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

//Active link


//Sticky position
window.onscroll = function () { stickyFunction() };

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//THE MODAL IMAGE
// var modal = document.getElementsByClassName('modal');
// var postImg = document.getElementsByClassName('project-img');
// var modalImg = document.getElementsByClassName('modal-content');

// postImg.onclick = function () {
//   modal.style.display = "block";
// };
// modal.onclick = function () {
//   modal.style.display = "none";
// };