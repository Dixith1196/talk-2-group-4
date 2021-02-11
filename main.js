import count from './count.js'

var i = 0;

function main(){
document.getElementById('Increment').addEventListener('click', add)
document.getElementById('Decrement').addEventListener('click', Subtract)
}
window.addEventListener("load", main)

async function add(){
    i = i + 1
var str = count[0]
let utterance = new SpeechSynthesisUtterance(str + (i));
speechSynthesis.speak(utterance);
}

async function Subtract(){
    var str = count[1]
   i = i - 1
   if(i < 0){
    let utterance = new SpeechSynthesisUtterance(str + "Negative" + (i));
    speechSynthesis.speak(utterance);
   }else{
    let utterance = new SpeechSynthesisUtterance(str + (i));
    speechSynthesis.speak(utterance);
   }
  
    
}