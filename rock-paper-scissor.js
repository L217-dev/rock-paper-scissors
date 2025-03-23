console.log('time to play')
let humanScore=0;
let computerScore=0;
let boardPlayerCount=0;
let boardComputerCount=0;
const gameResult=document.querySelector("#gameResult")
const result=document.querySelector("#result")
const playRock = document.querySelector('#rock')
const playScissor=document.querySelector('#scissor')
const playPaper=document.querySelector('#paper')
const boardPlayer=document.querySelector("#playerScore")
const boardComputer=document.querySelector("#computerScore")

function getComputerChoice(){
    // this fuction create this options for the computer and select one using rando numbers between 0 and 2
    const options = ['rock','paper','scissor'];
    const computerChoice=options[Math.floor(Math.random()*3)];
    return computerChoice;
//this function could be make it whit using if , if else and else to select the rock, paper or scissor 
}
    
function playRound(playerSelection){
    const computerChoice=getComputerChoice();
    gameResult.textContent=''
    if (playerSelection===computerChoice){
        result.textContent=`This is Draw the score is: you ${humanScore}, Computer ${computerScore}`
        }
    else if ((playerSelection==='rock' && computerChoice==='scissor') || (playerSelection==='paper' && computerChoice==='rock') || (playerSelection==='scissor' && computerChoice==='paper') ) {
        humanScore++;
        result.textContent=`This is Win the score is: you ${humanScore}, Computer ${computerScore}`  ;
    } else {
        computerScore++;
        result.textContent=`This is Losses the score is: you ${humanScore}, Computer ${computerScore}`;
    }
    
    function whoWin(){
    if (humanScore===5){
        gameResult.textContent='You win, choose again to play another macht'
        boardPlayerCount++
        boardPlayer.textContent=boardPlayerCount
        humanScore=0;
        computerScore=0;
    }
    else if ( computerScore==5){
        gameResult.textContent='Computer win, choose again to play another macht'
        boardComputerCount++
        boardComputer.textContent=boardComputerCount
        humanScore=0;
        computerScore=0;}
    }

    whoWin()
}


playRock.addEventListener('click', ()=>{
    const playerSelection='rock'
    playRound(playerSelection)
})

playScissor.addEventListener('click', ()=>{
    const playerSelection='scissor'
    playRound(playerSelection)
})

playPaper.addEventListener('click', ()=>{
    const playerSelection='paper'
    playRound(playerSelection)
})