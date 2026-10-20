console.log("Hello");

//btn event listener
const btn = document.querySelector('#btn');
const container = document.querySelector(".container");

createDiv(16);

function createDiv(numOfDiv) {
// create Divs
    for(let i = 1; i <= numOfDiv; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);
    }
}

function getInput() {
        
        const numOfDiv = parseInt(prompt("Enter the number of boxes"));
        
        if (numOfDiv > 100) {
            numOfDiv = 100;
            alert("Max limit reached, setting to 100");
        }
        else { 
            alert(`You entered: ${numOfDiv}`);
        }
    createDiv(numOfDiv);
}

function removeDiv(numOfDiv) {

}



btn.addEventListener("click", getInput );

