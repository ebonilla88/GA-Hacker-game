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
  notes: ["I love LaCroix eh"],
  emails: ["kesha      <sent>"],
  message: [`I found this article about react, I know how much you love 'react'`]
}

const kesha = {
  notes: ["Brock drinks way to much LaCroix"],
  emails: ["CEO       <sent>"],
  message: [`Dont forget your password 'GAisAwesome'` ]
}

const ceo = {
  notes: ["this dude Brock loves Goldenrod colored things"],
  emails: ["kesha       <sent>"],
  message: [`Brock is canadian` ],
  passwords: ["DontKnowWhatImDoing"],
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
      addCommandLine("#####################################")
      addCommandLine("Help menu:")
      addCommandLine("- Mission: find CEO's secret message")
      addCommandLine(`- Type 'run' to start hack routine`)
      addCommandLine("######################################")
    } else if ((split.length > 0) && split[0] === "sei-8-" && split[1] === "run") {
      addCommandLine("|---------------------------|")
      addCommandLine(`| Running hack routine.....  |`)
      addCommandLine("|---------------------------|")
      addCommandLine("| Successfully launched.... |")
      addCommandLine("|---------------------------|")
      document.querySelector('#input').value = "Username:";

    } else if( (split.length > 0) && split[0] === "Username" && split[1] === "help"){
        addCommandLine("-------------------")
        addCommandLine("Username List:")
        addCommandLine(`- Brock 'LaCroix'`)
        addCommandLine("- Kesha")
        addCommandLine("- CEO")
        addCommandLine("Type username")
        addCommandLine("-------------------")
        document.querySelector('#input').value = "Username:";

      //#################-brock's logic below-#######################

    } else if ((split.length > 0) && split[0] === "Username" && split[1] === "brock" || split[1] === "Brock") {
        document.querySelector('#input').value = "Password:";

    } else if((split.length > 0) && split[0] === "Password" && split[1] === "LaCroix" || split[1] === "lacroix") {
        brockProfile()
        document.querySelector('#input').value = "Brock:";

    } else if((split.length > 0) && split[0] === "Brock" & split[1] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Brock:emails' to check emails`);
        addCommandLine(`- type 'Brock:notes' to check notes`);
        addCommandLine(`- type 'Brock:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Brock:";

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "emails" && split[2] === "kesha" && split[3] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Brock:emails:kesha:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Brock:emails:kesha:";

    }else if(event.target.value === "Brock:emails:cd ..") {
        brockProfile()
        document.querySelector('#input').value = "Brock:";

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "emails" && split[2] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Brock:emails:kesha' to read email`);
        addCommandLine(`- type 'Brock:emails:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Brock:emails:";

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "notes" && split[2] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Brock:notes:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Brock:notes:";

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

    } else if((split.length > 0) && split[0] === "Brock" && split[1] === "cd .."){
      addCommandLine("-------------------")
      addCommandLine("Username List:")
      addCommandLine(`- Brock 'LaCroix'`)
      addCommandLine("- Kesha")
      addCommandLine("- CEO")
      addCommandLine("Type username")
      addCommandLine("-------------------")
      document.querySelector('#input').value = "Username:";

      //####################- kesha's logic -#######################
    } else if((split.length > 0) && split[0] === "Password" && split[1] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- Go thru other systems to find clues`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Password:";

    }else if ((split.length > 0) && split[0] === "Password" && split[1] === "cd ..") {
        document.querySelector('#input').value = "Username:";

    }else if ((split.length > 0) && split[0] === "Username" && split[1] === "kesha") {
        document.querySelector('#input').value = "Password:";

    } else if((split.length > 0) && split[0] === "Password" && split[1] === "react" || split[1] === "React") {
        keshaProfile()
        document.querySelector('#input').value = "Kesha:";

    } else if((split.length > 0) && split[0] === "Kesha" && split[1] === "emails" && split[2] === "ceo" && split[3] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Kesha:emails:ceo:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Kesha:emails:ceo:";

    }else if((split.length > 0) && split[1] === "emails" && split[2] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Kesha:emails:ceo' to read email`);
        addCommandLine(`- type 'Kesha:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Kesha:emails:";

    } else if(event.target.value === "Kesha:emails:cd ..") {
        keshaProfile()
        document.querySelector('#input').value = "Kesha:";

    } else if (event.target.value == "kesha:emails:ceo:cd .." || event.target.value == "kesha:emails:CEO:cd .." ) {
          addCommandLine(nOutput(kesha.emails, "emails"))
          document.querySelector('#input').value = "Kesha:emails:";

    } else if(event.target.value == "Kesha:emails:ceo") {
        addCommandLine(nOutput(kesha.message, "message"))
        document.querySelector('#input').value = "Kesha:emails:ceo:";

    }  else if((split.length > 0) && split[0] === "Kesha" && split[1] === "emails") {
        addCommandLine(nOutput(kesha.emails, "emails"))
        document.querySelector('#input').value = "Kesha:emails:";

    } else if((split.length > 0) && split[0] === "Kesha" & split[1] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Kesha:emails' to check emails`);
        addCommandLine(`- type 'Kesha:notes' to check notes`);
        addCommandLine(`- type 'Kesha:cd ..' to go back`);
        addCommandLine("----------------------------------------")
        document.querySelector('#input').value = "Kesha:";

    } else if((split.length > 0) && split[1] === "notes" && split[2] === "help"){
        addCommandLine("----------------------------------------")
        addCommandLine("Help menu:");
        addCommandLine(`- type 'Kesha:notes:cd ..' to go back`);
        addCommandLine("----------------------------------------")

        document.querySelector('#input').value = "Kesha:notes:";

    } else if(event.target.value === "Kesha:notes:cd .."){
        keshaProfile()
        document.querySelector('#input').value = "Kesha:";

    } else if((split.length > 0) && split[0] === "Kesha" && split[1] === "notes") {
        addCommandLine(nOutput(kesha.notes, "notes"))
        document.querySelector('#input').value = "Kesha:notes:";

    } else if((split.length > 0) && split[0] === "Kesha" && split[1] === "cd .."){
        addCommandLine("-------------------")
        addCommandLine("Username List:")
        addCommandLine(`- Brock 'LaCroix'`)
        addCommandLine("- Kesha")
        addCommandLine("- CEO")
        addCommandLine("Type username")
        addCommandLine("-------------------")
        document.querySelector('#input').value = "Username:";

      //####################-CEO logic-########################
    } else if ((split.length > 0) && split[0] === "Username" && split[1] === "ceo" || split[1] === "CEO") {
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

    } else if((split.length > 0) && split[0] === "CEO" && split[1] === "message"){
        addCommandLine(nOutput(ceo.message, "messages"))
        document.querySelector('#input').value = "CEO:messages:";

    } else if (event.target.value == "CEO:messages:cd ..") {
          ceoProfile()
          document.querySelector('#input').value = "CEO:";

    }else if((split.length > 0) && split[0] === "CEO" && split[1] === "emails"){
        addCommandLine(nOutput(ceo.emails, "emails"))
        document.querySelector('#input').value = "CEO:emails:";

    } else if(event.target.value === "CEO:notes:cd .."){
        ceoProfile()
        document.querySelector('#input').value = "CEO:";

    } else if(event.target.value === "CEO:message:cd .."){
        ceoProfile()
        document.querySelector('#input').value = "CEO:";

    }else if(event.target.value === "CEO:passwords:cd .."){
        ceoProfile()
        document.querySelector('#input').value = "CEO:";

    }else if((split.length > 0) && split[0] === "CEO" && split[1] === "notes"){
        addCommandLine(nOutput(ceo.notes, "notes"))
        document.querySelector('#input').value = "CEO:notes:";

    } else if((split.length > 0) && split[0] === "CEO" && split[1] === "message") {
        addCommandLine(nOutput(ceo.message, "message"))
        document.querySelector('#input').value = "CEO:message:";

    } else if((split.length > 0) && split[0] === "CEO" && split[1] === "passwords") {
        addCommandLine(nOutput(ceo.passwords, "passwords"))
        document.querySelector('#input').value = "CEO:passwords:";

    } else if((split.length > 0) && split[0] === "CEO" && split[1] === "cd .."){
        addCommandLine("Username List:")
        addCommandLine("- Brock LaCroix")
        addCommandLine("- Kesha")
        addCommandLine("- CEO")
        addCommandLine("Type username")
        document.querySelector('#input').value = "Username:";

    } else if((split.length > 0) && split[1] === "reset" || split[2]=== "reset" || split[3] === "reset"){
        addCommandLine("Local System Startup")
        addCommandLine("Bootup complete")
        addCommandLine("Version 1.0")
        addCommandLine("Started: 2/14/2020")
        addCommandLine(`Type 'help' for help`)
        addCommandLine(`Type 'run' to start hacking`)
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
  addCommandLine(`Type 'help' at any point to list of commands`)
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
  addCommandLine("- message")
}


})()
