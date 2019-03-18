console.log ("hello for dom.js", document);

function onButtonPush() {
    console.log ("onButtonPushed", document, idButtonPushed);
    console.log ('header 1 ', idHeader1);
};

const idButtonPushed = document.getElementById ("idBtnPush");
const idHeader1= document.getElementById ("idH1");
console.log("test");
console.log("memes",idButtonPushed);
document.getElementById("idBtnPush").addEventListener("click",onButtonPush)