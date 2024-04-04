
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");



function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}



document.getElementById('scrollBtn1').addEventListener('click', function() {
  document.querySelector('.main-content:nth-of-type(2)').scrollIntoView({ 
      behavior: 'smooth' 
  });
})


document.getElementById('scrollBtn2').addEventListener('click', function() {
  document.querySelector('.main-content:nth-of-type(3)').scrollIntoView({ 
      behavior: 'smooth' 
  });
})


document.getElementById('scrollBtn3').addEventListener('click', function() {
  document.querySelector('.main-content:nth-of-type(4)').scrollIntoView({ 
      behavior: 'smooth' 
  });
})


document.getElementById('scrollBtn4').addEventListener('click', function() {
  document.querySelector('.main-content:nth-of-type(1)').scrollIntoView({ 
      behavior: 'smooth' 
  });
})