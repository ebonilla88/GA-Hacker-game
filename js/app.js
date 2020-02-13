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
  notes: ["I love LaCroix eh", "2. my second note"],
  emails: ["kesha      <sent>"],
  message: [`found this article about react, I know how much you love 'react'`]
}

const kesha = {
  notes: ["kesha first note", "kesha my second note"],
  emails: ["CEO       <sent>"],
  message: [`Dont forget your password 'GAisAwesome'` ]
}

const ceo = {
  notes: ["kesha first note", "kesha my second note"],
  emails: ["kesha       <sent>"],
  message: [`Kesha, what's my password again?` ],
  passwords: ["The Matrix"],
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
      addCommandLine("- Help us find CEO's secret message")
      addCommandLine(`- Type 'run' to start hack routine`)

    }else if ((split.length > 0) && split[0] === "sei-8-" && split[1] === "run") {
      addCommandLine("----------------------- ")
      addCommandLine("Running hack routine...")
      addCommandLine("Successfully launched")
      addCommandLine("-----------------------")
      addCommandLine("Username List:")
      addCommandLine(`- Brock 'LaCroix'`)
      addCommandLine("- Kesha")
      addCommandLine("- CEO")
      addCommandLine("Type username")
      document.querySelector('#input').value = "Username:";

      //#################-brock's logic below-#######################
    } else if ((split.length > 0) && split[0] === "Username" && split[1] === "brock" || split[1] === "Brock") {
        document.querySelector('#input').value = "Password:";

    } else if((split.length > 0) && split[0] === "Password" && split[1] === "LaCroix") {
        brockProfile()
        document.querySelector('#input').value = "Brock:";

    } else if(event.target.value === "Brock:emails:cd ..") {
        brockProfile()
        document.querySelector('#input').value = "Brock:";

    } else if (event.target.value == "Brock:emails:kesha:cd ..") {
          addCommandLine(nOutput(brock.emails, "emails"))
          document.querySelector('#input').value = "Brock:emails:";

    } else if(event.target.value == "Brock:emails:kesha") {
        addCommandLine(nOutput(brock.message, "message"))
        document.querySelector('#input').value = "Brock:emails:kesha:";

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "emails"){
        addCommandLine(nOutput(brock.emails, "emails"))
        document.querySelector('#input').value = "Brock:emails:";

    } else if(event.target.value === "Brock:notes:cd .."){
        brockProfile()
        document.querySelector('#input').value = "Brock:";

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "notes") {
        addCommandLine(nOutput(brock.notes, "notes"))
        document.querySelector('#input').value = "Brock:notes:";

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "exit"){
        addCommandLine("Username List:")
        addCommandLine("- Brock LaCroix")
        addCommandLine("- Kesha")
        addCommandLine("- CEO")
        addCommandLine("Type username")
        document.querySelector('#input').value = "Username:";

      //kesha's logic
    } else if ((split.length > 0) && split[0] === "Username" && split[1] === "kesha") {
        document.querySelector('#input').value = "Password:";

    } else if((split.length > 0) && split[0] === "Password" && split[1] === "react") {
        keshaProfile()
        document.querySelector('#input').value = "Kesha:";

    } else if(event.target.value === "Kesha:emails:cd ..") {
        keshaProfile()
        document.querySelector('#input').value = "Kesha:";

    } else if (event.target.value == "kesha:emails:ceo:cd ..") {
          addCommandLine(nOutput(kesha.emails, "emails"))
          document.querySelector('#input').value = "Kesha:emails:";

    } else if(event.target.value == "Kesha:emails:ceo") {
        addCommandLine(nOutput(kesha.message, "message"))
        document.querySelector('#input').value = "Kesha:emails:ceo:";

    } else if((split.length > 0) && split[0] === "Kesha" && split[1] === "emails") {
        addCommandLine(nOutput(kesha.emails, "emails"))
        document.querySelector('#input').value = "Kesha:emails:";

    } else if(event.target.value === "Kesha:notes:cd .."){
        keshaProfile()
        document.querySelector('#input').value = "Kesha:";

    } else if((split.length > 0) && split[0] === "Kesha" && split[1] === "notes") {
        addCommandLine(nOutput(kesha.notes, "notes"))
        document.querySelector('#input').value = "Kesha:notes:";

    } else if((split.length > 0) && split[0] === "Kesha" && split[1] === "exit"){
        addCommandLine("Username List:")
        addCommandLine("- Brock LaCroix")
        addCommandLine("- Kesha")
        addCommandLine("- CEO")
        addCommandLine("Type username")
        document.querySelector('#input').value = "Username:";

      //####################-CEO logic-########################
    } else if ((split.length > 0) && split[0] === "Username" && split[1] === "ceo") {
        document.querySelector('#input').value = "Password:";

    } else if((split.length > 0) && split[0] === "Password" && split[1] === "GAisAwesome" || split[1] === "gaisawesome"){
        ceoProfile()
        document.querySelector('#input').value = "CEO:";

    } else if(event.target.value === "CEO:emails:cd ..") {
        ceoProfile()
        document.querySelector('#input').value = "CEO:";

    } else if (event.target.value == "CEO:emails:ceo:cd ..") {
          addCommandLine(nOutput(ceo.emails, "emails"))
          document.querySelector('#input').value = "CEO:emails:";

    } else if(event.target.value == "CEO:emails:kesha") {
        addCommandLine(nOutput(ceo.message, "message"))
        document.querySelector('#input').value = "CEO:emails:kesha:";

    }else if((split.length > 0) && split[0] === "CEO" && split[1] === "emails"){
        addCommandLine(nOutput(ceo.emails, "emails"))
        document.querySelector('#input').value = "CEO:emails:";

    } else if(event.target.value === "CEO:notes:cd .."){
        ceoProfile()
        document.querySelector('#input').value = "CEO:";

    }else if((split.length > 0) && split[0] === "CEO" && split[1] === "notes") {
        addCommandLine(nOutput(ceo.notes, "notes"))
        document.querySelector('#input').value = "CEO:notes:";

    }else if((split.length > 0) && split[0] === "CEO" && split[1] === "exit"){
        addCommandLine("Username List:")
        addCommandLine("- Brock LaCroix")
        addCommandLine("- Kesha")
        addCommandLine("- CEO")
        addCommandLine("Type username")
        document.querySelector('#input').value = "Username:";

    } else {
        command2.textContent = event.target.value;
        addCommandLine("Command not found");
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
  addCommandLine(`Type 'help' for help`)
  addCommandLine(`Type 'run' to start hacking`)
  // set the innerHTML value of that element to what you want to be displayed
}

function addCommandLine(input) {
  const p = document.createElement('p');
  p.textContent = input;
  document.querySelector('.commands').prepend(p);
  document.querySelector('#input').value = "sei-8-:";
}

function brockProfile(){
  addCommandLine("Brock:")
  addCommandLine("- emails")
  addCommandLine("- notes")
}

function keshaProfile(){
  addCommandLine("Kesha:")
  addCommandLine("- emails")
  addCommandLine("- notes")
}

function ceoProfile(){
  addCommandLine("CEO:")
  addCommandLine("- emails")
  addCommandLine("- notes")
  addCommandLine("- passwords")
}


})()
