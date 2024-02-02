/* header code*/

window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

function borderBottom1(){
  document.getElementById("border").classList.add("border-bottom");
  document.getElementById("border3").classList.remove("border-bottom");
  document.getElementById("border2").classList.remove("border-bottom");
}

function borderBottom2(){
  document.getElementById("border2").classList.add("border-bottom");
  document.getElementById("border").classList.remove("border-bottom");
  document.getElementById("border3").classList.remove("border-bottom"); 
}

function borderBottom3(){
  document.getElementById("border3").classList.add("border-bottom");
  document.getElementById("border2").classList.remove("border-bottom");
  document.getElementById("border").classList.remove("border-bottom");
}

/* counter code*/

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 1800
    });
});
