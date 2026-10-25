console.log("Hello");

//btn event listener
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
createDiv(16);

//Generate random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
return color;
}

//Hover in interaction
function hover()
{
const allDiv = document.querySelectorAll(".content");
allDiv.forEach((div) => {
    div.addEventListener("mouseenter", (event) => {
    var randomColor = getRandomColor();    
    event.target.style.backgroundColor = randomColor;   
   });
});

//Hover Out
allDiv.forEach((div) => {
    div.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "";
   });
});
}

hover();

function createDiv(numOfDiv) {
// create Divs
    for(let i = 0; i < numOfDiv; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);
        hover();
    }
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

