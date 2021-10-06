const readLine = require('readline');
const r = readLine.createInterface({input : process.stdin, output : process.stdout});
let num1 = Math.floor((Math.random()*10) +1);
let num2 = Math.floor((Math.random()*10) +1);
let answer = num1 + num2;

r.question(`What is ${num1} + ${num2} ? `, (userInput)=>{
    console.log(userInput);
    })