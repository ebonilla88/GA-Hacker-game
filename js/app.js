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

const brock = {
  notes: ["1. my first note", "2. my second note"],
  emails: ["email From Kesha", "email from CEO"]
}

const kesha = {
  notes: ["kesha first note", "kesha my second note"],
  emails: ["e1@gmail.com", "e2@gmail.com"]
}

const ceo = {
  notes: ["my first note", "my second note"],
  emails: ["e1@gmail.com", "e2@gmail.com"]
}

function nOutput(arr, key){
  let output= `${key}: `
  for(let i = 0; i < arr.length; i++){
    output += arr[i] + " "
  }
  return output
}
const firstPress = true

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
    //checkInput(event.target.value);
    const command2 =document.createElement('p')
    // before doing ifs, split the input on :, check first value
    const split = event.target.value.split(":")
    if ((split.length > 0) && split[0] === "sei-8-" && split[1] === "help"){
        addCommandLine("Help menu:")
        addCommandLine("Type run to start hack routine")

    }else if ((split.length > 0) && split[0] === "sei-8-" && split[1] === "run") {
        addCommandLine(" | | | | | | ")
        addCommandLine("Running hack routine...")
        addCommandLine("Successfully launched")
        addCommandLine("Type username")
        document.querySelector('#input').value = "Username:";

    } else if ((split.length > 0) && split[0] === "Username" && split[1] === "brock") {
      document.querySelector('#input').value = "Password:";
    }else if ((split.length > 0) && split[0] === "Password" && split[1] === "LaCroix") {
        addCommandLine(nOutput(brock.emails, "emails"))
        addCommandLine(nOutput(brock.notes, "notes"))
        document.querySelector('#input').value = "Brock:";
    }else if((split.length > 0) && split[0] === "username" && split[1] === "kesha") {
      addCommandLine(nOutput(kesha.notes, "notes"))
    } else {
      // do the stuff you did
        command2.textContent = event.target.value;
    }
    commands.prepend(command2)
  }
}

function startBtn(){
  main.remove();
  img.remove();
  // get a reference to the element that you want to display stuff inspect
  addCommandLine("Local System Startup")
  addCommandLine("Bootup complete")
  addCommandLine("Version 1.0")
  addCommandLine("Started: 2/14/2020")
  addCommandLine(`Type 'help' to display game Menu`)
  addCommandLine(`Type 'run' to start hacking`)
  // set the innerHTML value of that element to what you want to be displayed
}


function addCommandLine(input) {
  const p = document.createElement('p');
  p.textContent = input;
  document.querySelector('.commands').prepend(p);
  document.querySelector('#input').value = "sei-8-:";
}





})()
