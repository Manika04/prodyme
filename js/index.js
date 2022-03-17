let value = 1;
const valueDisplay = document.getElementById("value-display");

function increment(){
    value++;
    valueDisplay.innerText = value;
    console.log("Value incremented");
}
function decrement(){
    if(value > 1){
        value--;
        valueDisplay.innerText = value;
    }
    console.log("Value decremented");
}