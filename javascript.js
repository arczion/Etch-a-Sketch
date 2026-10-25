console.log("Hello");

//btn event listener
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

//Hover in interaction
function hover()
{
const allDiv = document.querySelectorAll(".content");
allDiv.forEach((div) => {
    div.addEventListener("mouseenter", (event) => {
        const square = event.target;
        let passes = Number(square.dataset.passes) || 0;

        if (passes === 0) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
        event.target.style.backgroundColor = "#" + randomColor;    
        }
        
        if (passes < 10) {
            passes++;
            square.dataset.passes = passes;
            square.style.opacity = passes/ 10;
        }
    });
});
}
createDiv(16);
function createDiv(numOfDiv) {
// create Divs
    const squareSize = 960 /numOfDiv;

    for(let i = 0; i < numOfDiv * numOfDiv; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        content.style.width = `${squareSize}px`;
        content.style.height = `${squareSize}px`
        container.appendChild(content);
    }
    hover();
}

function getInput() {
        
        let numOfDiv = parseInt(prompt("Enter the number of boxes"));
        if (isNaN(numOfDiv) || numOfDiv < 1) {
            return;
        }
        if (numOfDiv > 100) {
            numOfDiv = 100;
            alert("Max limit reached, setting to 100");
        }
        removeDiv();
        createDiv(numOfDiv);
}

function removeDiv() {
    container.replaceChildren();
}


btn.addEventListener("click", getInput );

