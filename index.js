let readlinesync= require("readline-sync");
let chalk= require('chalk');

let cl= console.log;

let username= readlinesync.question(chalk.whiteBright.bgRed.bold("Hey Bud, Welcome to the Nolan's Batman Quiz! Name please? 😀\n"));

cl(chalk`\nGreat {underline ${username}}, let's find out if you are a TRUE FAN of {bold {bgYellow Nolan's Batman Trilogy}}.`);

let score = 0;

//Array of question-answer objects
const questions = [
  {
    question: "Who killed Bruce Wayne's parents?",
    options: `\n      1. Falcone \n      2. Chill \n      3. Zsaz`,
    answer: "Chill"
  },
  {
    question: "When Bruce decides to leave Gotham City, what does he give to a homeless man?",
    options: `\n      1. Wallet\n      2. Watch\n      3. Jacket`,
    answer: "Jacket"
  },
  {
    question: "What activity does Bruce tell Lucius Fox he's interested in when asking for the nomex survival suit?",
    options: `\n      1. Canoeing\n      2. Spelunking\n      3. Ab sailing`,
    answer: "Spelunking"
  },
  {
    question: "Who said the quote first: 'Its not who I am underneath, but what I do that define me.'",
    options: `\n       1. Bruce\n       2. Rachel\n       3. Gordon`,
    answer: "Rachel"
  },
  {
    question: "Complete the quote: 'Some men aren't looking for anything ..., like money. They can't be bought, bullied, reasoned, or negotiated with. Some men just want to watch the world burn.'",
    options: `\n       1. Logical\n       2. Material\n       3. Normal`,
    answer: "Logical"
  },
  {
    question: "Who is the only person to call Batman a Dark Knight in the film?",
    options: `\n      1. Joker\n      2. Harvey\n      3. Gordon`,
    answer: "Gordon"
  }
];

//Level 0 will have 3 questions, if score is greater than 1, pass on to next Level
let level= 1;

cl(chalk`\n{bold {underline LEVEL ${level}}}`);

//Quiz Loop
for(let i = 0; i< questions.length; i++){

  if(i === 3){

   cl(chalk`\n{yellow ------------------------------------}\n`);
   cl(chalk`{yellow ------------------------------------}\n`);


    cl(`\nLevel 1 Score: ${score} correct out of 3`);

    if(score < 1){
      cl(chalk`Your score is not enough to qualify to the next level\n\n{bold [ALFRED] Why do we fall ${username}? So that we can learn to pick ourselves up.} TRY AGAIN 😉 .`);

      cl(chalk`\n{yellow ------------------------------------}\n`);
      cl(chalk`{yellow ------------------------------------}\n`);

      break;
    }

    cl(chalk`{bold [JOKER] LET'S PUT A SMILE ON THAT FACE}\nYay! You made it to level 2`);
    level++;

    cl(chalk`\n{bold {underline LEVEL ${level}}}`);

  }

  cl(chalk`\n {yellow ------------------------------------} \n`);

  cl(chalk`{bgWhite {black Question ${i+1}}}. ${questions[i].question}`);

  cl(questions[i].options + '\n');

  const answer= readlinesync.question("Your Answer: ");

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    cl("[IN BATMAN'S VOICE] TRUE");
    score++;
  } else{
    cl("[IN BATMAN'S VOICE] NOT TRUE");
  }
  cl(`Current Score: ${score}`)
}

cl(chalk`\n{yellow ------------------------------------} \n`);
cl(chalk`{yellow ------------------------------------} \n`);

cl(chalk`{bold Quiz over}, your final score: ${score}`);

