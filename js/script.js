//Hamburguer menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active')

});

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
};


//Shoe active link from w3schools
var btns = navbarLinks.getElementsByClassName("link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");

    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" current", "");
    }

    this.className += " current";
  });
};