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
const matchDescription=document.querySelector('h2')

function getComputerChoice(){
    // this fuction create this options for the computer and select one using rando numbers between 0 and 2
    const options = ['rock','paper','scissor'];
    const computerChoice=options[Math.floor(Math.random()*3)];
    return computerChoice;

}
    
function playRound(playerSelection){
    const computerChoice=getComputerChoice();
    gameResult.textContent=''
    matchDescription.textContent='Match Score'
    if (playerSelection===computerChoice){
        result.textContent=`Draw both choose ${computerChoice}: Points: you ${humanScore} - Computer ${computerScore}`;
        }
    else if ((playerSelection==='rock' && computerChoice==='scissor') || (playerSelection==='paper' && computerChoice==='rock') || (playerSelection==='scissor' && computerChoice==='paper') ) {
        humanScore++;
        result.textContent=`You Win the computer choose ${computerChoice}: Points: you ${humanScore} - Computer ${computerScore}`;
    } else {
        computerScore++;
        result.textContent=`You Losses the computer choose ${computerChoice}: Points: you ${humanScore} - Computer ${computerScore}`;
    }
    
    function whoWin(){
    if (humanScore===5){
        gameResult.textContent='You win, choose again to play another macht'
        matchDescription.textContent='Match Score (Firs to get 5 points get 1 score)'
        boardPlayerCount++
        boardPlayer.textContent=boardPlayerCount
        humanScore=0;
        computerScore=0;
    }
    else if ( computerScore==5){
        gameResult.textContent='Computer win, choose again to play another macht'
        matchDescription.textContent='Match Score (Firs to get 5 points get 1 score)'
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