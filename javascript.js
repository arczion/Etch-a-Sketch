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
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
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
        removeDiv();
        let numOfDiv = parseInt(prompt("Enter the number of boxes"));
        
        if (numOfDiv > 100) {
            numOfDiv = 100;
            alert("Max limit reached, setting to 100");
        }
        createDiv(numOfDiv);
}

function removeDiv() {
    if (container.hasChildNodes()) {
        while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
        }
    }
}


btn.addEventListener("click", getInput );

