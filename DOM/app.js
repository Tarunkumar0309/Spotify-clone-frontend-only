// let smallImages = document.getElementsByClassName( "oldImg");

// for(let i =0; i<smallImages.length; i++){
//     console.dir(smallImages[i].src);
//     smallImages[i].src = "Assets/Spider-Man.png";
//     console.log(`value of image no. ${i} is changed`);
// }
// for(let i = 1; ;i--){
//     console.log("chal be dobara se kar");
// }

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));
 
// console.dir(document.querySelector("div a"));

// console.dir(document.query)
 
// let links = document.querySelectorAll('.box a');
// // for( let i = 0; i<links.length; i++){
// //     links[i].style.color = "green";
// // }
// for(link of links){
//     link.style.color = "red"


// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector("body").prepend(para1); 

// para1.classList.add('red');


// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm h3!";
// document.querySelector("body").prepend(h3); 

// h3.classList.add('blue');


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText= "i'm a div";
// para2.innerText = "ME Too!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").prepend(div); 


// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked");
// };


// let btns = document.querySelectorAll("button");

// for (btn of btns) {
    // btn.onclick= sayHello;
    // btn.onclick= sayName;
    // btn.onmouseenter = function(){
    //     console.log("you entered a button");
    // }
    // console.dir(btn);
    
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked me");
//     });
// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName(){
//     alert("Apna College");
// }



// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("parah was clicked");
// });

// let btn= document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// }
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("buttonclicked")
// });



// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// }
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("buttonclicked")
// });
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
   
//    console.log("key= ", event.key);
//    console.log("code=",b event.code);

//     console.log("Key was pressed");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function(){
//     console.log("Keyb was released")
// });


// let form = document.querySelector("form");


// form.addEventListener("submit", function(event){
//    event.preventDefault();
//    alert("form submitted!");

//    let input = document.querySelector("input");
//    console.dir(inp);
//    console.log(inp.value);

// let user = document.querySelector("#user");

// user.addEventListner(" change" , function(){
//     console.log("input changed");
//     console.log("final value=", this.value);
// });

let div =document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
})


ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    })}

