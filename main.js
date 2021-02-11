

var click = 0;
var revClick = 0;
var textArr = ["1", "2", "3", "4", "5"]
var reverseTextArr = ["5", "4", "3", "2", "1"]
var clickStr = ""

function readText(){
    console.log("this is calling")
    if(click < textArr.length){
        clickStr = textArr[click]
        let utterance = new SpeechSynthesisUtterance(clickStr);
        speechSynthesis.speak(utterance);
        click = click + 1
    }else{
        let utterance = new SpeechSynthesisUtterance(textArr[textArr.length - 1]);
        speechSynthesis.speak(utterance);
        click = 0;
    } 
}

function reverseReadText(){
    revClick = 0;
    if(revClick < reverseTextArr.length){
        clickStr = reverseTextArr[revClick]
        let utterance = new SpeechSynthesisUtterance(clickStr);
        speechSynthesis.speak(utterance);
        revClick = revClick + 1
    }else{
        let utterance = new SpeechSynthesisUtterance(reverseTextArr[revClick]);
        speechSynthesis.speak(utterance);
        revClick = 0;
    } 
}