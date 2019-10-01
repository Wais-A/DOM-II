// selectors
const logo = document.querySelector('.logo-heading');
const headerImg = document.querySelector('header img');
const text = document.querySelector('*');
const header = document.querySelector('header');
const h2 = document.querySelectorAll('h2');
const navBar = document.querySelector('.nav-container');
const boatImg = document.querySelector('.content-destination img');
const selected = document.querySelector('h1');


// effects
const randomColors = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
const notePad = document.createElement('h1');
header.appendChild(notePad);

// event listeners 
logo.addEventListener('mouseover', pink);
logo.addEventListener('mouseout', black);
headerImg.addEventListener('click', rounded);
window.addEventListener('scroll', colors);
window.addEventListener('keydown', writer);
window.addEventListener('focus', header2);
navBar.addEventListener('wheel', navColor);
window.addEventListener('load', change);
window.addEventListener('resize', resized);
selected.addEventListener('mousemove', select);
// functions for the events

function pink(){
    logo.style.color = 'pink';

}


function black(){
    logo.style.color = 'black';
}

function rounded(){
    headerImg.style.borderRadius = '50%';
}


function colors(){
    setInterval(() => {


       text.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

    }, 20000)
   
}


function writer() {
  
    notePad.textContent = `${event.key}`

}

function header2(){
    h2.forEach((item)=>{
        item.style.textShadow = '2px 5px 1px pink';
    } );
}


function navColor() {
    setInterval(() => {


        navBar.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

    }, 20000)
}
function change(){

    

    setTimeout(function () {
        boatImg.style.borderRadius = '55% 0 45% 0';

    }, 30000)
}

function resized (){
    alert(`your window changed`);
    
}

function select(){
        alert(`you moved over me!!`);
       
} 