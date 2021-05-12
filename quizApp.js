  var readlineSync = require('readline-sync');
 console.log("Anujkumar Yadav");

// var username = readlineSync.question("May i have your name plz? ");

// console.log("Welcome "  +  username);

//ex05
// var age = readlineSync.question("Enter Your Age? ");
// console.log("Your Age is "+age);

// if(age == 20){
//   console.log("right");
// }else{
//   console.log("Wrong");
// }

//ex06
// var score = 0;

// var hometown = readlineSync.question("Enter your hometown ");
// if(hometown == "Pune"){
//   console.log("right");
//   score+1;;
// }
// else{
//   console.log("Wrong");
//   score-1;
// }

//ex07

// function add(a,b){
//   return a+b;
// }
// add(4,5);



//ex08
// var score = 0;

// function play (question,answer){
//   var username = readlineSync.question(question);

//   if(username === answer){
//    console.log("right");
//      score = score+1;
//   }
//   else{
//     console.log("Wrong");
//   }
// }
// play("Your favourite sports player","MS Dhoni");

//ex09

// var name = "Anujkumar Yadav";

// for(let i=0;i<5; i++){
//   console.log(name);
// }


//ex10

//  var num = readlineSync.question("enter the number of rows");

// for(let i = 0; i<num; i++){
//   for(let j=0;j<i;j++){
//     console.log("*");
//   }
//    console.log("\n");
// }

//ex11
var listItem = ["Rice","Oil","Sugar","Tea","Maggi"];
console.log(listItem);
// console.log(listItem[0]);
// console.log(listItem[2]);
// console.log(listItem[4]);

for(let i =0;i<listItem.length;i++){
  console.log(listItem[i]);
}