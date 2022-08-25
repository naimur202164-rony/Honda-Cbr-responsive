console.log("Javascript Add");
let close=document.querySelector('.close');
let toggle=document.querySelector('.toogle')
let navbar=document.querySelector('.mobile-nav ul');
console.log(navbar)
console.log(toggle)

toggle.addEventListener('click',()=>{

    navbar.style.display="flex";
    // navbar.style.display="none"
    console.log("Clicked")
});





console.log(close,toggle)