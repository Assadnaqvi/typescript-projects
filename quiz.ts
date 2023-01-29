

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { start } from "repl";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
})}
async function welcome(){

  let rainbowTitle =  chalkAnimation.rainbow("Lets Start The Quiz");
  await sleep();
rainbowTitle.stop();}

await welcome();
 
async function askQuestion(){
    const answer = await inquirer
    .prompt([

        {
            type:"list",
            name:"operator",
            message:"Capital of pakistan is",
            choices:["Lahore","Islamabad","Pishawar","Karachi"]
        }
     ]);


    if(answer.operator=="Islamabad"){
        console.log("Your Answer is Correct")
    } else {
        console.log("your answer is wrong")
}

}





    

//askQuestion();


async function startAgain(){
    do{ await askQuestion();
var again = await inquirer
.prompt(
    { type:"input",
    name:"restart",
    message:"would you like to perform again:"

        })    
    }while(again.restart=="y" || again.restart=="Y" ||again.restart=="yes" ||again.restart=="YES");
     }


    

startAgain();