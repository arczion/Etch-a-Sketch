console.log("Hello");
let numOfDiv = parseInt(prompt("Enter the number of boxes"));
//alert(`You entered: ${numOfDiv}`);
if (numOfDiv > 100) {
    numOfDiv = 100;
    alert("Max limit reached, setting to 100");
}

for(let i = 1; i <= numOfDiv; i++) {
    const container = document.querySelector(".container");
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
}