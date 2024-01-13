 let clip = document.querySelector(".vid") 
  
/* Applying mouseover event on video clip  
and then we call play() function to play  
the video when the mouse is over the video */ 
clip.addEventListener("mouseover", function (e) { 
    clip.play(); 
})
const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.add)