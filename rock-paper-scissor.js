console.log('time to play')
let HumanScore=0;
let ComputerScore=0;
function getComputerChoice(){
    // this fuction create this options for the computer and select one using rando numbers between 0 and 2
    const options = ['rock','paper','scissors'];
    const computerChoice=options[Math.floor(Math.random()*3)];
    return computerChoice;
//this function could be make it whit using if , if else and else to select the rock, paper or scissor 
}

function getHumanChoice(){
    const HumanChoice=window.prompt('Select one of these rock, paper, scissors right now this game is cases sensitve');
 return HumanChoice;
 // this function get the human choice using a prompt window
}

function playGame(){
    let HumanScore=0;
    let ComputerScore=0;
    function playRound(humanChoice,computerChoice){
        if (humanChoice===computerChoice){
            return console.log(`This is Draw the score is: you ${HumanScore}, Computer ${ComputerScore}`);
        }
        else if ((humanChoice==='rock' && computerChoice==='scissors') || (humanChoice==='paper' && computerChoice==='rock') || (humanChoice==='scissors' && computerChoice==='paper') ) {
            HumanScore++;
            return console.log(`This is Win the score is: you ${HumanScore}, Computer ${ComputerScore}`)   ;
        } else {
            ComputerScore++;
            return console.log(`This is Losses the score is: you ${HumanScore}, Computer ${ComputerScore}`);
    
        }
    
    }

    let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection)
    
    humanSelection=getHumanChoice();
    computerSelection=getComputerChoice()
    playRound(humanSelection,computerSelection)
    
    humanSelection=getHumanChoice();
    computerSelection=getComputerChoice()
    playRound(humanSelection,computerSelection)

    humanSelection=getHumanChoice();
    computerSelection=getComputerChoice()
    playRound(humanSelection,computerSelection)

    humanSelection=getHumanChoice();
    computerSelection=getComputerChoice()
    playRound(humanSelection,computerSelection)

    if (HumanScore===ComputerScore){
        console.log(`This is Draw game the score is: you ${HumanScore}, Computer ${ComputerScore}`)
    }
    else if (HumanScore>ComputerScore){
        console.log(`You win the game  the score is: you ${HumanScore}, Computer ${ComputerScore}`)
    } else{
        console.log(`You Losses the game  the score is: you ${HumanScore}, Computer ${ComputerScore}`)
    }
}

playGame()