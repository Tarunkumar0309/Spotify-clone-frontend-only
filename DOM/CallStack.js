// function hello() {
//     console.log("inside hello fxn")
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fxn")
//     hello();

// }

// console.log("calling demo fxn")

// demo();

// console.log("done, bye!");


// // visualising the call stack

// function one(){
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
 

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);



// //synchronous nature
// setTimeout(()=>{
//     console.log("apni padhai");
// }, 2000);

// setTimeout(()=>{
//     console.log("Namaste duniya");
// }, 2000);
// console.log("Hello....");


// h1 = document.querySelector("h1");



// function changeColor(color, delay) {
//    return new Promise((resolve, reject) =>{
//         setTimeout(()=> {
//             let num = Math.floor(Math.random() * 5)+1;
//             if(num>3){
//                 reject("promise rejected");
//             }

//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//             // if(nextColorChange) nextColorChange();
//         }, delay);
//     });
    
    
// }

// async function demo() {
//     try {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     } catch(err) {
//         console.log("error caught");
//         console.log(err);
//     }

    
//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a+3);

// }


// changeColor("red", 1000)

//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("green color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color was completed");
        
//     });
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000,() => {
//         changeColor("green", 1000,() => {
//             changeColor("yellow", 1000,() => {
//             changeColor("blue", 1000);
//         });
        
//     });
// });
  
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if(internetSpeed > 4) {
//         success();
//         // console.log("your data was saved: ", data);

//     } else {
//         failure();
//     }
//         // console.log("weak connection. data not saved")
//     }
// }  
// savetoDb(
//     "apna college",
//     () => {
//         console.log("success: your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("failure2 : weak connection");

//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");

//     }
// );

// )

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() *10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }

// savetoDb("apna college")

//     .then((result) => {
//         console.log("data 1 saved");
//         console.log("result of promise:", result);
//         return savetoDb("helloworld");
  

//     })
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promise:", result);
//         return savetoDb("tarun");
//     }) 
//     .then((result)=> {
//         console.log("data3 saved");
//         console.log("result of promise:",result);
        
//     }) 

//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of promise:",error);
        
//     });

// async function greet() {
//     //  throw "404 page not found";
//     return "hello";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err)=> {
//     console.log("promise was rejected with err :", err)
// }) 


// let  demo =async () => {
//     return 5;
// };


// function getNum(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) +1;
//             console.log(num);
//             resolve(); 
//         }, 1000) ;
//     });
// }

// async function demo() { 
//    await getNum();
//    await getNum();
//    await getNum();
// }



// let jsonRes =
// '{"fact": Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student ={
//     name : "Tarun",
//     marks : 95,
// };
 let btn = document.querySelector("button");
 
 btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
   let p =  document.querySelector("#result");
   p.innerText = fact;

 });
 

let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
    return res.data.fact;    
    } catch (e) {
        console.log("error- ", e);

        return "No fact found";
    }
}

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
  
//         .then((data) => {
//             console.log(data.fact);
//         })

//     .catch((err)=> {
//         console.log("ERROR-", err);
//     });

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch (e) {
//         console.log("error- ", e);

//     }
//     console.log("bye");
// }













