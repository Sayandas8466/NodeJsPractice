// let age  = prompt("Please enter a number");
// console.log(age);

// if(age > 40){
//     console.log("A valid Age");
// }
// else if(age >10 && age< 18 ){
//     console.log("The age is in teeen");
// }
// else if( age >= 18){
//     console.log("Adult");
// }
// else{
//     console.log("Invalid");
// }
//FOR ....IN LOOP

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";
// for (let x in cars) {
//     text += cars[x] + " ";
// }
// console.log(text);
// //FOR ...OF LOOP

// let language = "JavaScript";

// let text1 = "";
// for (let x of language) {
//     text1 += x;
// }
// console.log(text1);

// let a = 1;
// let b= 4;

// let sum = (a,b)=>
//     {
//         let c = a+b;
//         return c;
//     }
// let c  = sum(a,b);
// console.log(c);

// let sentence  = `The name is "Harry" sahoo`;
// console.log(sentence)
// let name = `Sayan`;
// let style = `The name of ${name}`;
// console.log(style);
// console.log(style.toUpperCase());
// console.log(style.slice(4,10));


// let number = [1,2,3,4,5,6]
// console.log(number);
// console.log(number.length);

// number.forEach((element) =>{
//     console.log(element * element);
// })

// let arr = "SAYAN";
// let char = Array.from(arr);

// console.log(char);

// for(let i of number){
//     console.log(i);
// }

// for (let i in number) {
//     console.log(i);
// }
// // Array Map Method --- to create new array
// let a1 = number.map((value,index,array) =>{
//     console.log(value,index,array)
//     return value+10

// })
// console.log(a1)
// // Array Filter Methid 
// let a2 =[29,45,67,4,5,6,2,5];

// let res = a2.filter((value)=>{
//     return value <10
// })
// console.log(res)
// // Array reduce method

// let result=a2.reduce((val1,val2) =>{
    
//     return val1+val2
// })
// console.log(result)


// let array = [14,21,5,20,31]
// console.log(array)
// let inp = prompt("Enter a number ")
// i = Number.parseInt(inp)
// array.push(i);
// console.log(array)


// const canDrive = (age) =>{
//     return age >= 21?true:false
// }
// let runAgain = true
// while(runAgain){
//     let age =prompt("Enter Your age")
//     age = Number.parseInt(age)
// if(age < 0){
//     console.error("Please Enter a Valid Age");
//     break;
// }


// if(canDrive(age)){
//     alert("Yes , You can drive")
// }
// else{
//     alert("No , You can't drive");
// }
// runAgain = confirm("Do You want to run again?")
// }

// let color = prompt("Enter the color");
// document.body.style.background=color;

document.getElementsByTagName("nav")[0].firstElementChild.style.color ="red"
Array.from(document.getElementsByTagName("li")).forEach ((element) =>{
    element.style.background="cyan";
})