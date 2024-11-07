// console.log("Hello World!");
// console.log("Apna College");
// let a = 10;
// let b = 5;
// console.log("sum:", a+b);
// this is a comment


// let pencilPrice = 10;
// let eraserPrice = 5;
// // let output = "The total price is :"+( pencilPrice + eraserPrice)+" Rupees.";
// let output = `The total price is : ${pencilPrice  + eraserPrice} Rupees.`
// console.log(output); 


// Arithmetic operators
// let a = 10;
// let b = 2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a**b);

// uinary operATIONS
// console.log(a++);
// console.log(++a);

// ASSIGNMENT OPERATORS
// let a = 10;
// let b = 5;
// b = a;
// console.log(b);
 

// Operators
// let age = 18;
// console.log( age  > 18);


// Conditional Statement

// console.log("before my if statement");

// let age =24;
// if(age >= 18) {
//     console.log(" you can vote");
//     // console.log(" you can drive");
// }
// if (age<18){
//     console.log(" You cannot vote")
// }
// console.log("after my if statement");
// if (age > 20) {
//     console.log("You are in your 20s");
// }

// let firstName = "Tarun";
// if(firstName == "Tarun") {
//     console.log(`Welcome ${firstName}`);
    
// }
 

// let age = 14;
// if(age >= 18) {
//     console.log(" you can vote");
// }else if ( age>= 18) {
//     console.log("you cannot vote")
// }
// else if (age < 18) {
//     console.log("you cannot vote2")
// }




// else if statement

// let marks = 99;

// if(marks > 90 && marks <= 100) {
//     console.log("Your grades are O");
// }

// else if(marks >= 80 && marks <= 90) {
//     console.log("Your grades are A+");
// }

// else if(marks >=60  && marks < 80) {
//     console.log("Your grades are A");
// }


// else if(marks >= 33 && marks < 60) {
//     console.log("Your grades are B");
// }


// else if(marks < 33) {
//     console.log("Your grades are F");
// }

// else if (marks >100) {
//     console.log("Invalid format of marks")
// }


// else statement

// let age = 11;
// if (age >= 18) {
//     console.log("you can vote");

// }else{
//     console.log("you can't vote");
// }

//  **************** NESTED IF_ELSE ***************


// let marks = 100;

// if (marks >= 80){

//     console.log("Pass");
//     if(marks >= 80){
//         console.log("Grade: O");
//     } else {
//         console.log("Grade : A")
//     }
// }else{
//     console.log("Better luck next time!")
// }

// ********************* Logical Operations ****************

// let marks = 90;
// if ( marks >= 33 && marks >= 80){
//     console.log("Pass")
//     console.log("A+")
// }


//  ****************** Truthy & falsy **************************
// let string = " ";

// if(string) {
//     console.log("string is not empty");
    
// }else {
//     console.log("string is empty");
// }

// if(" ") {
//     console.log("It has true value");
// } else {
//     console.log("It has false value");
// }


// ************************** Switch Statement *********************

// let color = "red";

// switch(color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break; 
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("light is broken");
// } 


// ****************************** Alerts & prompts ***********************************

// alert("something is wrong!");
// console.log("this is a simple message");
// console.error("this is a simple error");
// console.warn("this is a simple warning");



// prompt
// let firstName = prompt("Enter your name : ")
// console.log(firstName);

// let firstName = prompt("enter first name");
// let lastName = prompt("enter second name");
// let msg = "Welcome " + firstName+ lastName + "!";
// alert(msg);

// **************** Trim Method ************************

// let msg = "    he     llo       ";

// console.log( msg );


// let password=prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);



// *********************Methods and Arguments ******************************
// let msg = "ILoveCoding";
// console.log(msg);


// ************************** Method Chaining **********************************

// let msg = "      hello    ";
// let newMsg = msg.trim();
// console.log(" after trim :", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase:", newMsg);

// let newMsg = msg.trim().toUpperCase();
//  console.log(newMsg);



// ************************************* SliceMethod ******************************

// let msg ="apnaCollege";
// console.log(msg.slice(-1));


//  let msg = "Ilovecoding";
//  console.log(msg);

// let cars = ["audi", "bmw", "xuv", "maruti"];


// PQS ********************************** JS part3 *****************************

// 1- let arr=[7,9,0,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);


// 2-
// let arr=[7,9,0,-2];
// let n = 3;

// let ans = arr.slice(arr.length-3);
// console.log(ans);

// 3-

// let str=prompt("Enter the string:");
// if(str.length === 0){
//     console.log("string is  empty.")

// }else {
//     console.log("string is not empty");
// }

// 4-

// let char=" manuT";
// if(char)

// ******************* FOR LOOP ******************************

// console.log("1");
// console.log("2");
// console.log("3"); 
// console.log("4");
// console.log("5");

// for (let i = 1; i<=5; i++) {
//     console.log(i);
// }


// 


// PRINT ODD NUMBERS

// for(let i=1; i<=15; i=i+2){
//     console.log(i);

// }


// console.log("Backward loop");


// for(let i = 15; i>=1; i = i-2){
//     console.log(i);
// }



// PRINT EVEN NUMBERS

// for(let i =2; i<=10; i = i+2){
//     console.log(i);
// }

// console.log("Backward loop");

// for(let i=1000; i>=2; i=i-2){
//     console.log(i);
// }

// MULTIPLICATION TABLE OF 5

// let n = prompt("Write your number");
// n = parseInt(n);
// for(let i =n; i<=n*10; i=i+n){
//     console.log(i);
// }

// for(let i =4; i<=40; i = i+4){
//     console.log(i);
// }


// for(let i = 1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j = 1; j<=3; j++){
//         console.log(j);
//     }
// }


// WHILE LOOP

// let i = 5;

// while(i>=1){
//     console.log(i);
//     i--;
// }


// let i = 1;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }


// ************** TABLE GAAME **************************

// const favMovie = "avatar";
// let guess = prompt("guess my favourite movie");

// while((guess != favMovie) && (guess != "quit")) {
//    guess=prompt("Movie is wrong you can try again");
// }

// if(guess == favMovie){
//     console.log("Congrats!");
// }else{
//     console.log("You quit the game");
// }

// let i =1;
// while(i<=5){
//     if (i===3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("We use break at 3");



// const favMovie = "avatar";
// let guess = prompt("guess my favourite movie");

// while (guess != favMovie) {
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//    guess=prompt("Movie is wrong you can try again");
// }

// if(guess == favMovie){
//     console.log("Congrats!");
// // }
// let fruits= ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");

// for(i=0; i <fruits.length; i++){
//     console.log(i, fruits[i]);
// }
// for(i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonderwoman", "flash"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`); 
//     }
// }

// let student = [["aman", 95], ["shradha", 92.2], ["karan", 100]];
// for(let i=0; i<student[i].length; i++){

//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// let fruits= ["mango", "apple", "banana", "litchi", "orange"];
// for(i of fruits){
//     console.log(i);

// }

// for (char of "apnacollege"){
//     console.log(char); 
// }



// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonderwoman", "flash"]];

// for(list of heroes){
//     for(hero of list)
//     console.log(hero);
// }

// let todo = [];
// let req = prompt("please enter your request");

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list"){
//         console.log("--------------");
 
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);

//         }
//         console.log("--------------");


//     }else if(req == "add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req =="delete"){
//         let idx = prompt("please enter your request");
//         todo.splice(idx, 1);
//         console.log("task deleted");


//     }else{
//         console.log("wrong request");
//     } 

//     // req = prompt("please enter your request");
    
// }


// const student = {
//     name: "Tarun Kumar",
//     age: 26,
//     marks: 94.4,
// };


// const post = {
//     username: "@tarunkumar",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts:5,
//     tags: ["@apnacollege", "@delta"]
// };


// const obj = {
//     1:"a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };


// const student = {
//     name: "tarunkumar",
//     age: 26,
//     marks: 94.4,
//     city: "Delhi"
// };

// const classInfo={
//     aman:{
//         grade: "A+",
//         city: "Delhi",
//     },
//     shradha:{
//         grade: "A+",
//         city: "Pune"
//     },
//     karan:{
//         grade: "O",
//         city: "Mumbai"
//     },
// };


// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Pune"
//     },
//     {
//         name: "shradha",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "karan",
//         grade: "A+",
//         city:"Mumbai"
//     }
// ];




// ************************** Guessing the number - Game******************************
// const max=prompt("enter the max. number");


// const random = Math.floor(Math.random()*max) + 1;

// console.log(random);

// let guess = prompt("guess the number");

// while(true){
//     if(guess=="quit") {
//         console.log("user quit");
//         break;
//     }

//     if(guess == random) {
//         console.log("you are right! congrats!! random number is :", guess);
//         break;
    
//     }else if( guess < random){
//         guess = prompt("Hint: your guess was too small. please try again");
//     } else{
//         guess = prompt("Hint: your guess was too large. please try again");
//     }
    
// }

// function hello(){
//     console.log("hello");
// }


// function printName(){
//     console.log("apna college");
//     console.log("tarun kumar");
// }



// function print1to5(){
//     for(i =1; i<=5; i++) {
//         console.log(i);
//     }

// }


// function isAdult() {
// // print1to5();{
//     let age =13;
//     if(age >= 18){
//         console.log("adult");
//     }else{
//         console.log("not adult")
//     }
 
// }
// isAdult();


// function printPoem() {
//     console.log("Twinle Twinkle, litter star");
//     console.log("How high wonder, what you are.");
// }

// printPoem();
// printPoem();
// printPoem();
// printPoem();
// printPoem();
// printPoem();


// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);

// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
//  }


// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("tarun", 26);



// function sum(a,b){
//     console.log(a+b);
// }
// sum(21,60);


// function calAvg(a,b,c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }


// calAvg(2,4,6);
// calAvg(6,6,6);


// function printTable(n){
//     for(i = n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// printTable(10);

// function sum(a,b){
//     console.log("hello");
//     console.log("hello");
//     return a+b;
//     console.log("hello2");
//     console.log("hello2");
// }


// function isAdult(age){
//     if(age>= 18){
//         return("adult");
//     }else{
//         return("not adult");
//     }
//     console.llog("bye bye");
// }



// console.log(sum(sum(1,2),3));


// function getSum(n){
//     let sum = 0;

//     for(let i =1;i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }


// let str = ["hi", "hello","bye", "!"];

// function concat(str){
//     let result;
//     for(let i =0; i <str.length; i++){
//         result += str[i];

//     }
//     return result;
// } 

// let sum = 54; // global scope
// function calSum(a,b){
//     let sum=a+b;//Function scope
//     console.log(sum);
// }
// calSum(1,2);
// // function scope (more specific, meaning clear , very closer > global scope

// console.log(sum);

// {
//     let a =25;
// }
// console.log(a);

// for(let i=1; i<=5; i++){
//     console.log(i);// block scope
// }
// console.log(i);

// let age = 5;
// if(age >= 18){
//     let str = "adult";
//     console.log(str);    
// }

// {
// var a =25;
// }
// console.log(a);


// function outerFunc(){
//     let x=5;
//     let y= 6;
//     function innerFunc(){
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }

//     innerFunc();
// }

// let greet = "hello";//global scope

// function changeGreet(){
//     let greet = "namaste";// function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); // lexical scope 
//     }
// }

// console.log(greet);
// changeGreet();



// let name = "tarun";
// let x =5;
// let sum= function(a,b){
//     return a+b;
// }

// let hello = function(){
//     console.log("hello");
// }



//  hello = function(){
//     console.log("namaste");
// }

// function multipleGreet(func, count){  //higher order function
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 1000);





// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd =function(n){
//             console.log(!(n%2 == 0));
//         }

//         return odd;
//     }else if(request == "even"){
//         let even =function(n){
//             console.log((n%2 == 0));
//         }
//         return even;
//     } else{
//         console.log("wrong request")
//     }
// }


// let request = "odd"; //even

// const calculator = {
//      num:55,
//     add: function(a,b){
//         return a+b;
//     } ,
//     sub: function(a,b)  {
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };


//   const student = {
//     name: "tarun",
//     age: 26,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy)/3; //this ----> this is basically is talking about calling object, here student is calling the object here.
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
//   }

//   function getAvg(){

//     console.log(this); 
// }
// console.log("hello");
// console.log(a);
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// try{
//     console.log(a);
// } catch(err){
//     console.log("caught an error.. a is not defined");
//     console.log(err);
// }


// console.log("hello2");
 


// const sum=(a,b)  => {
//     console.log(a+b);

// }
// const cube=(n) => {
//     return (n*n*n);
// }

// const pow = (a,b) => {
//     return a**b;
// }

// const hello = () => {
//     console.log("Hello world!");
// }

// const mul=(a,b) => (   // short form for single valued function   
//     a*b
// )


// console.log("Hi there");s

// setTimeout(() => {
//     console.log("tarun kumar's learning journey");
// }, 4000);

// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");




// let id = setInterval(() => {
//         console.log("tarun kumar's learning journey");
//     }, 2000);
// console.log(id);

// let id2= setInterval(() => {
//     console.log("I will join google ASAP");
//  }, 2000);
//  console.log(id2);


// const student ={
//     name: "tarun", 
//     marks: 97,
//     prop: this, // global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },

//     getMarks: () => {
//         console.log(this);  //parent scope ---> window, ye kharab tarika hai arrow function ko use krne ka 
//         return this.marks;
//     },
//     getInfo1: function(){

//         setTimeout(()=>{
//             console.log(this); //student
//         },2000); 
//     },

//     getInfo2: function(){

//         setTimeout(function(){
//             console.log(this);  //window
//         },2000);
//     },
// };


// const a = 5; // global scope

// sqr=(n) => {
//     return n*n;  
// }

// let id =setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval run");
// }, 10000);



// let arr=[1,2,3,4,5];
 
// let print = function(el){
//     console.log(el);

// };
// arr.forEach(print);


// let arr = [1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el);
// });
 
// // let print = function(el){
//     console.log(el);
    

  
// };
// arr.forEach(print);


// let students = [
//     {
//         name: "tarun",
//         marks: 97,
//     },
//     {
//         name: "shradha",
//         marks: 94.4,
//     },
//     {
//         name: "rajat",
//         marks: 92,
//     },
// ];

// let gpa = students.map((el) => {
//     return el.marks/10;
// });

// // arr.forEach((student) => {
// //     console.log(student.marks);
// // });


// let num=[1,2,3,4];
// ////////////////////////
// let double = num.map((el)=>{
//     return el*el;

// })
// let nums = [1,2,3,4,7,8,9,10,12,11];
// let ans = nums.filter((el) => {
//     // return el %2 ==0; //even -> true, odd -> false
//     return el<5;
// });
// let nums =[1,2,3,4];
// let finalVal =nums.reduce((res,el) =>res +el);
// console.log(finalVal); 
 

// let arr = [1,2,3,5,4,66,777,8,9,2];
// let max = -1;

// for(let i=0; i<arr.length;i++){
//     if (max<arr[i]){
//         max= arr[i];
//     }
// }

// console.log(max);


// let max = arr.reduce((max, el) =>{
//     if (max < el){
//         return el;

//     }else{
//         return max;
//     }
// })

// console.log(max);

// let nums = [ 10,20,30,40];
// // let ans = nums.every((el) => el%10 == 0);
// // console.log(ans);
// function getMin(nums){
// let min = nums.reduce((min,el) => {
//     if (min < el){
//         return min;
//     }else{
//         return el;
//     }
// });
//     return min;
// }
// console.log(min); 

// function sum(a, b =2){
//     return a+b;
// }

// let arr =[1,2,3,4,5];
// let newArr=[...arr];

// let chars =[..."hello"];


// let odd =[1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...even, ...odd];


// const data ={
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const dataCopy ={...data, id:123, country:"India"};

// let arr = [1,2,3,4,5]; //val
// let obj1 ={...arr}; //obj -> key:val


// let obj2={..."Hello"};

// function sum(...args){
//     //arguments
//     for(let i=0; i<args.length; i++){
//         console.log("you give us: ", args[i]);
//     }
// }


// function min(a,b,c,d){
//     console.log(arguments.length);
// }

// function sum(...args){
//    return args.reduce((sum, el ) => sum+el);
// }

 let names = ["tony","bruce", "peter", "steve", "abc", "xyz", "pyq"];
//  let winner = names[0];
//  let runnerup = names[1];
//  let secondRunnerup = names[2];
// let[winner,runnerup,...others] = names;


//  ]


const student= {
    name:"Karan",
    class: 9,
    subjects:["hindi","english","math", "science"],
    username: "karan123",
    password: "abcd",

};

let {username:user, password:secret, city:place   ="Mumbai"} = student;
