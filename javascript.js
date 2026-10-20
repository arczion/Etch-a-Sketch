console.log("Hello");
let numOfDiv = parseInt(prompt("Enter the number of boxes"));
//alert(`You entered: ${numOfDiv}`);


for(let i = 1; i <= 16; i++) {
    const container = document.querySelector(".container");
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
}