const menuheader = document.querySelector(".menu")
const navlinks = document.querySelector(".navlinks")

menuheader.addEventListener("click", ()=>{
    navlinks.classList.toggle('mobile-menu')
})