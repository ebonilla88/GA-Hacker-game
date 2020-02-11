console.log("autosave check")
// CONSTANTS

//State Variables


//CACHED ELEMENTS
let btn = document.querySelector('#btn');
let input= document.querySelector('#input')

//EVENT LISTENERS
btn.addEventListener('click', hello);

input.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    checkInput(event.target.value);
  }
})


//Functions
function hello(){
  console.log('hello')
}
function checkInput(str){
  if(str == "ls"){
    console("testing the ls responds");
  } else {
    alert("not ls....")
  }
}
