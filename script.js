console.log("Hello")

const toggleButton=document.getElementsByClassName('navbar-toggle')[0];

const navbarLinks=document.getElementsByClassName('navbar-links');




toggleButton.addEventListener('click',()=>{
    for(let i=0;i<navbarLinks.length;i++)
    navbarLinks[i].classList.toggle('active')
})