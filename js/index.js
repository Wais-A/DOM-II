// selectors
const logo = document.querySelector('.logo-heading');
const headerImg = document.querySelector('header img')
const text = document.querySelector('*');
const header = document.querySelector('header')

// effects
const randomColors = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
const notePad = document.createElement('h1');
header.appendChild(notePad);

// event listeners 
logo.addEventListener('mouseover', pink);
logo.addEventListener('mouseout', black);
headerImg.addEventListener('click', rounded);
window.addEventListener('scroll', colors);
window.addEventListener('keydown', writer)





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

    }, 1000)
   
}


function writer() {
  
    notePad.textContent = `${event.key}`

}

