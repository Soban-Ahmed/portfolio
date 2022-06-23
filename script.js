let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".cancel-btn");
let nabar = document.querySelector(".navbar");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none"; 
    nabar.classList.add("active"); 
}
    
closeBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto"; 
    nabar.classList.remove("active"); 
}