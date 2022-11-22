// Smoothly move to top of page
const rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({ top: 0, behavior: "smooth" })
}

// 'Move to top of page' button fades in when user scrolls down
var topBtn = document.getElementById("scrollToTopBtn")

window.onscroll = function() { 
  scrollFunction();
  scrollFunction2();
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || rootElement.scrollTop > 500) {
    topBtn.style.opacity = "1"
    topBtn.style.bottom = "50px"
  } else {
    topBtn.style.opacity = "0"
    topBtn.style.bottom = "-50px"
  }
}

// Toggle navigation bar dropdown menu on/off by clicking on burger button
function toggleNav() {
  var topMenu = document.getElementById("topMenu");
    if (topMenu.style.height == "0px") {
      topMenu.style.height = "200px";
      topMenu.style.paddingTop = "60px";
    } else {
      topMenu.style.height = "0px";
      topMenu.style.paddingTop = "0px";
    }
}

// Make navbar dropdown menu stay at top of page when scrolling down, when navbar is visible again: dropdown stays under navbar
function scrollFunction2() {
  if (document.body.scrollTop > 93 || rootElement.scrollTop > 93) {
    document.getElementById("topMenu").style.position = "fixed";
    document.getElementById("topMenu").style.top = "0";
  } else if (document.body.scrollTop < 93 || rootElement.scrollTop < 93) {
    document.getElementById("topMenu").style.position = "absolute";
    document.getElementById("topMenu").style.top = "93px";
  }
}