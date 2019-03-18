console.log("initialized js");
let bangCounter = 0;

function renderDiv(message) {
    console.log ("Got to function, render div")
    const newDiv = document.createElement("div");
    newDiv.textContent = message;
    return newDiv;  
};
console.log ("running function renderDiv", renderDiv("hello world"));

function onBodyClicked(event) {

    console.log ("onbodyclick is running");
    console.log("logging event target from onbodyclicked function", event.target);

    if (bangCounter === 0){
        event.target.textContent = "bang"
        console.log ("bang is being written, the value of bangcounter = 0");
        bangCounter ++;
        console.log ("bangcounter ++ has triggered the value of bangCounter = ", bangCounter)
    }   else {
            event.target.firstChild.textContent = "bang " + bangCounter;
            console.log ("bang is being written alongisde bang counder, the value of bangcounter is 0<")
            bangCounter++;
            console.log ("bangcounter ++ has triggered the value of bangCounter = ", bangCounter);
    
};
let hiarchy = [documentdic]

};

document.body,addEventListener("click", onBodyClicked);

