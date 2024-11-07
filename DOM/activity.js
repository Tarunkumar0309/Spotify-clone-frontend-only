// let btn = document.querySelector("button");
 
// btn.addEventListener("click", function() {
//     // let h3 = document.querySelector("h3");
//     // let randomColor = getRandomColor();
//     h3.innerText = randomColor;


//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     // h3.innerText = randomColor;
//     console.log("color updated")
// });

//  function getRandomColor() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);


//     let color = `rgb(${red},${green},${blue})`;
//     return color;
//  }


//  document.addEventListener('DOMContentLoaded', (event) => {
//     const element = document.getElementById('yourElementId');
//     if (element) {
//         element.addEventListener('click', yourFunction);
//     }
// });


// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");  // Now this is defined
//     let randomColor = getRandomColor();     // Get the random color

//     if (h3) {                               // Check if h3 exists
//         h3.innerText = randomColor;         // Set the color text
//     }

//     let div = document.querySelector("div"); // Select the div element
//     if (div) {                               // Check if div exists
//         div.style.backgroundColor = randomColor; // Set the background color
//     }

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     const element = document.getElementById('yourElementId'); // Ensure this ID exists in your HTML
//     if (element) {
//         element.addEventListener('click', yourFunction);
//     } else {
//         console.log('Element with ID yourElementId not found');
//     }
// });




// function yourFunction() {
//     console.log("Your element was clicked!");
// }



let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("parah was clicked");
})


let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
});


