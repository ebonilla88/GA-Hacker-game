//console.log("autosave check")
// CONSTANTS

//State Variables


(function(){

// put your code in the iffy

 // put any variables you want your functions to have
 //access to here

// document.addEventListener('DOMContentLoaded', function(){
//
//   // any executed code here that refers to dom elements that might not be loaded
//
//
// })


function createHTMLForLine(text) {
  const mainDiv = document.querySelector("#main")
  const newLineLi = document.createElement("p")
  newLineLi.innerText = text
  mainDiv.appendChild(newLineLi)

}



//CACHED ELEMENTS
let btn = document.querySelector('#btn');
let input= document.querySelector('#input')
let main= document.querySelector('.main')
let commands = document.querySelector('.commands')
let img= document.querySelector('img')
let consoleDiv = document.querySelector('.console');
//EVENT LISTENERS
btn.addEventListener('click', startBtn);
input.addEventListener('keypress', enterStr);


//Functions

function enterStr(event){
  if (event.key == 'Enter') {
    console.log(event.target.value)
    checkInput(event.target.value);
    const command2 =document.createElement('p')
    command2.textContent = event.target.value;


    // if(commands.firstChild){
    //   commands.insertBefore(command2, commands.firstChild)
    // } else {
    commands.appendChild(command2)
    // }
  }
}

function startBtn(){
  main.remove();
  img.remove();

}

function addCommandLine(input) {
  const p = document.createElement('p');
  p.textContent = input;
  document.querySelector('.commands').prepend(p);
  document.querySelector('#input').value = "GA-sei-8-//:";
}

function checkInput(str){
  // if(str == "ls" || str == "GA-sei-8-//:ls"){
  //   addCommandLine(str)
  // } else {
    addCommandLine(str)
  // }
}



})()
