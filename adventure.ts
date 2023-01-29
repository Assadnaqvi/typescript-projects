

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { start } from "repl";
let score1=10;
let score=Math.floor((Math.random()*30)+1)
const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
})}
async function welcome(){
   
  let rainbowTitle =  chalkAnimation.rainbow("Lets Start The Game");
  await sleep();
rainbowTitle.stop();}

await welcome();
 
async function askQuestion(){
    const answer = await inquirer
    .prompt([

        {
            type:"list",
            name:"operator",
            message:"Which option would you like to chose",
            choices:["Attack","Defend","Withdraw"]
        ,
    }
   

     ]);


    if(answer.operator=="Attack"){
    console.log("enemy energy remains = ",score,"%")
if(score<30){
    console.log("enemy died")

}
    console.log("you won the game your score is = "+score1)
    } else if(answer.operator=="Defend"){
        console.log("you saved");
    if(score>30){
        console.log("you loses");
    console.log("enemy score is = "+score1)}}
else if(answer.operator=="Withdraw"){
    console.log("Both withdrawn")
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