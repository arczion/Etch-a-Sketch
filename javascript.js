console.log("Hello");

const container = document.querySelector(".container");
console.log(container);

const content = document.createElement("div");
console.log(content);
//content.classList.add("content");
//content.textContent = "This is a div";
for(let i = 0; i < 16; i++) {
    container.appendChild(content);
}