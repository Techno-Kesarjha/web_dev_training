//var c;
//console.log("--Welcome in JS----");

//console.log("------Starting with Variables-----,a,b,c");
//console.log("------Starting with Variables-----",a);
//Cannot access 'a' before initialization

//console.log("------Starting with Variables-----",c);
//undefined


//const a = 5;
//let b = 6;
//var c = 7;
 //let b = 9; Identifier 'b' has already been declared (at index.js:8:6)
//sum = a + b + c;

//b = 8;
//a = 8; Assignment to constant variable.

// console.log("a");
// console.log("-a : , b : , c : ", a, b, c,);
// c = 8;
// console.log("sum =", a+b+c);
// //console.log("sum",a,b,c);

// console.log("-----If Else Statements---");

// const marks = 80;

// if (marks > 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// console.log('largest no:')
// const x = 10;
// const y = 30;
// const z = 20;

// if(x>y>z){
//     console.log(x);
// }else if(y>z){
//     console.log(y);
// }else{
//     console.log(z);
// }

// if(x > y){
//     if(x > z){
//         console.log(x);
//     }
// } else {
//     if(y > z){
//         console.log(y);
//     }else{
//         console.log(z);
//     }
// }

// console.log("-----For Loop------");
//  let sum = 0;
// for (let i = 0; i < 10; i++){
//     if (i % 2 === 0){
//         console.log("even",i);
//     }
//     //console.log(i++)//even
//     //console.log(++i)//odd
//     sum = sum + i;

// }
// console.log(sum);


// console.log(sum);

// let m = 10;
// while (m > 0) {
//     m = m - 1;
// }

//question find max value from 4 numbers.

// console.log("--------Array----------");
// //indexes: 0, 1, 2, 3, 4, 5, 6, 7, 
// const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6,];

// console.log(arr);
// console.log("first value : ", arr[0]);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log("--------Array----------");
// //indexes: 0, 1, 2, 3, 4, 5, 6, 7, 
// const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6,];

// console.log(arr);
// console.log("first value : ", arr[0]);

// for(let i = 0; i < arr.length; i--) {
//     console.log(arr[i]);
// }

// console.log("----add new element at given index:");

// array.splice(4, 0, 7);
// console.log(arr);

// console.log("------remove element from array-------");
// arr.splice(2, 1);
// console.log(arr);

//questions



// console.log("----objects---------:");

// const obj = {
//     name: "kesar",
//     rollno: 147,
//     Result: "pass",
// };

// console.log(obj);
// //console.log("   name :", obj.name);
// console.log("   name :", obj["name"]);

// console.log("----add new key in obj----")
// obj.city = "kanpur"; 
// //obj.id = 2;
// console.log(obj);

// console.log("----add new key in obj----")
// obj.Result = "fail"; 
// console.log(obj);


// console.log("----remove element from obj-----");

// delete obj.name;

// console.log(obj);

// const data = [
//     {
//         id: 1,
//         name: "a",
//     },
//     {
//         id: 2,
//         name: "b",
//     },
//     {
//         id: 3,
//         name: "c",
//     },
//     {
//         id: 4,
//         name: "d",
//     },
//     {
//         id: 5,
//         name: "e",
//     },
// ];
// for(let i=0;i<data.length;i++){
//     const myObj = data[i];
//     //console.log(myObj.name);
//     myObj.rollno = i;
// }
// console.log(data);

//new variable






// for (let i = 0; i < data.length; i++){
//     const myObj = data[i];
//     console.log(myObj.name["official"]);
// }

// const d = {
//     name: "south G..",
//     tld: tld[0],
//     independent:false,
//     capital:"all..."
// }
// const arr= [
// const objnewadd={};
// objnewadd.capital = "all..."
// objnewadd.independent = false;
// objnewadd.name ="south G..";
// objnewadd.tld =tld[0],


// arr.push(objItem);
// ];

const objArr = [];

for (let i = 0; i < data.length; i++){
  const myObj = data[i];
  const newObjItem = {};
  newObjItem.name = myObj?.name?.common;
  newObjItem.ccn3 = myObj.ccn3;
  newObjItem.independent = myObj.independent;
  objArr.push(newObjItem);

}


console.table(objArr);