const mainCont = document.querySelector("#container");

function populateContainer(numBoxes = 16) {
    // reset main container to a blank container
    mainCont.innerHTML = "";

    // populate the container first with column containers,
    // then with the box containers itself.
    // this method evenly divides the grid 
    for (let col = 0; col < numBoxes; col++) {
        const colContainer = document.createElement("div");
        colContainer.classList.add("col");
        mainCont.appendChild(colContainer);

        for (let row = 0; row < numBoxes; row++) {
            const box = document.createElement("div");
            box.classList.add("box");
            colContainer.appendChild(box);
        }
    }

    // add mouseenter listener to each box to change color
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "black";
        });
    });
}

// initialize game
populateContainer();

// configure reset button functionality
const resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", () => {
    // ask for user input. if user input is null or undefined, take 16 as default   
    let newSize = parseInt(prompt("How many boxes do you want in one side?", 16)) || 16; 
    if (newSize > 100) {
        alert("You can't go above 100 due to technical reasons!");
        newSize = 100;
    }
    populateContainer(newSize);
})