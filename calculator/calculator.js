const { symbol, number } = require("prop-types");

let total = 0;
let buffer = "0";
let prevoperator; 
const screen = document.querySelector(".screen");

function init(){
  document.querySelector(".button").addEventListener("click", buttonClick(event.target.innerText));
}

function render() {
  screen.innerText = buffer;
}

function buttonClick(val){
  if(isNaN(val)){
    symbol(val);
  }else{
    number(val);
  }
}

function number(val){
  
}




init();