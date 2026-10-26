console.log("Hello");

//btn event listener
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

//Event delegation

container.addEventListener("mouseover", (event) => {
    const square = event.target;
    if (!square.classList.contains("content")) return;

    let passes = Number(square.dataset.passes) || 0;

    if (passes === 0) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        square.style.backgroundColor = "#" + randomColor;
    }

    if (passes < 10) {
        passes++;
        square.dataset.passes = passes;
        square.style.opacity = passes/10;
    }
});


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
}

function getInput() {
        
        let numOfDiv = Number(prompt("Enter the number of boxes"));
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

createDiv(16);
btn.addEventListener("click", getInput );

