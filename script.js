console.log("Javascript Add");
const close=document.querySelector('.close');
const toggle=document.querySelector('.toogle')
const navbar=document.querySelector('.mobile-nav ul');
console.log(navbar)
console.log(toggle)

toggle.addEventListener('click',()=>{
    
    navbar.style.display="flex";
    // navbar.style.display="none"
    console.log("Clicked")
});





console.log(close,toggle)