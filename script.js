let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".cancel-btn");
let navbar = document.querySelector(".navbar");
let nav = document.querySelector("nav");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none"; 
    navbar.classList.add("active"); 
}
    
closeBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto"; 
    navbar.classList.remove("active"); 
}

window.onscroll = function(e){ // why window. here?
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 20){ // why document.?
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
}