let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".cancel-btn");
let navbar = document.querySelector(".navbar");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let scrollBtn = document.querySelector(".scroll-button a");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none"; 
    navbar.classList.add("active"); 
    body.style.overflow = "hidden";
}
    
closeBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto"; 
    navbar.classList.remove("active"); 
    body.style.overflow = "auto";
}

window.onscroll = function(e){ 
    if(window.document.documentElement.scrollTop > 20){ // window and window.document is the same. Document is the main object (visible) the DOM
        nav.classList.add("sticky")
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky")
        scrollBtn.style.display = "none";
    }
}

// Close side navbar once you've clicked on a link
let navlinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navlinks.length; i++){
    navlinks[i].addEventListener("click", function(){
        navbar.classList.remove("active");
        menuBtn.style.opacity =1; 
        menuBtn.style.pointerEvents = "auto";
    })
}