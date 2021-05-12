const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;
var username = readlineSync.question("Enter your name : ");

console.log(chalk.blue("Welcome " +username));
console.log(chalk.bgMagenta("Let's Play a Quiz:Do You Know Anuj ?"))
console.log(   )
console.log(chalk.magentaBright("If you scored 3 right,only then you'll be allowed to play Level 1."))
console.log(  )
console.log(chalk.bgRedBright("Level 0 starts!"))
console.log(   )
function play(question,answer){
  var userQuestion = readlineSync.question(question);
  
  if(userQuestion.toUpperCase() === answer.toUpperCase()){
    console.log("right");
    score = score+1;
    console.log("Your current Score is " +score);
  }else{
    console.log("wrong");
    //score = score-1;
    console.log("Your current Score is " +score);
  }
}

var questions = [{
  question:"Which Year is My Birthyear ? ",
  answer:"2000"
},{
   question:"My favourite Colour? ",
   answer:"Black"
},{
   question:"Where do I live ? ",
   answer:"Mumbai"
},{
   question:"What type of movies do I like? ",
   answer:"horror"
},{
   question:"Which Sports do I like ? ",
   answer:"Cricket"
},{
   question:"Which Series do I like ? ",
   answer:"Gum hai kisi ke pyar"
}
];

for(var i=0;i<=2;i++){
  play(questions[i].question,questions[i].answer);
}

if(score === 3){
  console.log(chalk.bgRedBright("Welcome to Level 1!"))
  for(var i=3;i<questions.length;i++){
  //var currentQuestion = (questions[i]);
 play(questions[i].question,questions[i].answer);
}
}




console.log("Your Score is " +score);

var highScore = [{
  name:"Vikas",
  score:6
},{
  name:"Aisha",
  score:5
  }];

  console.log("They are highest Score ")

  for(var i=0;i<highScore.length;i++){
    console.log(highScore[i].name,highScore[i].score);
  }