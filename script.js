//create a 16x16 grid of square divs

 const container = document.getElementById("container");
 const resetButton = document.getElementById("resetbutton");

 function makeRows(rows, cols) {
     container.style.setProperty('--grid-rows', rows);
     container.style.setProperty('--grid-cols', cols);
     for (c = 0; c < (rows * cols); c++) {
         let cell = document.createElement("div");
         container.appendChild(cell).className = "grid-item";
     };
 };

 makeRows(16, 16);

 const square = document.getElementById("redBox").querySelector("div");

 square.addEventListener("mouseover", function( event ) {   
     event.target.classList.replace("grid-item", "color");
  
});

resetButton.addEventListener("click", function( event ) {
    let userInput = parseInt(prompt("Please enter the amount of pixels you would like:"));
    if (userInput < 0 || userInput > 100 || userInput % 1 !== 0) {
        return (alert("Please enter a number between 1 and 100 that is also an integer"));
    }    
    else if (userInput <= 100 && userInput >= 1 && userInput % 1 == 0) {
        removeBoxes();
        makeRows(userInput, userInput);
        
        
    };

});

function removeBoxes() {
    while (container.firstChild) {
        container.firstChild.remove();
    };
};
