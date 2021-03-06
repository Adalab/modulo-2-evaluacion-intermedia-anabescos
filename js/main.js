'use strict';

const inputElement = document.querySelector ('.js-input');
const buttonElement = document.querySelector ('.js-button');
const hintElement = document.querySelector ('.paragraph1');
const paragraph2Element = document.querySelector ('.paragraph2');
const randomGenerator = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max); 
}


// First event - input number - hints

function generateNumber () {
    
    const inputValue = parseInt(inputElement.value);
    

    if (isNaN(inputValue) || inputValue < 0 || inputValue > 100 ){
        hintElement.innerHTML = 'Pista: Escribe un número entre 0 y 100';
        
    } else if (inputValue < randomGenerator){
        hintElement.innerHTML = 'Pista: El número introducido es demasiado bajo';
        
    } else if (inputValue > randomGenerator) {
        hintElement.innerHTML = 'Pista: el número introducido es demasiado alto'
        
    } else if (inputValue === randomGenerator){
        hintElement.innerHTML = '¡Bien! ¡Has ganado, campeona!'
        
    }
} 

// buttonElement.addEventListener ('click', generateNumber);

// Second event - counter



let acc = 0;

function setCounter (){
    const inputValue = parseInt(inputElement.value);
    if (inputValue === randomGenerator){
        acc += 0;
    } else {
        acc += 1;
    }
   paragraph2Element.innerHTML = `Número de intentos: ${acc}`; 
}
function getButtonSetCounter (ev) {
ev.preventDefault()
    generateNumber();
    setCounter();
}


buttonElement.addEventListener ('click', getButtonSetCounter);