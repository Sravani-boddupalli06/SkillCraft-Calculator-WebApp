let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }

}

document.addEventListener("keydown", function(event){

    let key = event.key;

    if(!isNaN(key) || "+-*/.".includes(key)){
        appendValue(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }

});