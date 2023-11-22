
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


$(document).ready(function() {
 	
  var numbClick = 1;
  
  $('a[href*="#scrolldown"]').click(function(){
    
    var elemToGo = $(this).attr('href');
    var speed = 750;
    
    if(numbClick!=0){
      elemToGo += numbClick;
       if(!$(elemToGo).length){ // if the section #sectionAnyNumber doesn't exist, then.
         elemToGo = "#scrolldown"; //I put back the first section.
         numbClick=0; //I reinit the the value of number of click.
       }
    }
    
    numbClick++;
   
    $('html,body').animate(
    {
      scrollTop: $(elemToGo).offset().top
    },speed
    );
    return false;
  });
  
  
  

});