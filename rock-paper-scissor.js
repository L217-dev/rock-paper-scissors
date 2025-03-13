console.log('time to play')

function getComputerChoice(){
    // this fuction create this options for the computer and select one using rando numbers between 0 and 2
    let options = ['rock','paper','scissors']
    let computerChoice=options[Math.floor(Math.random()*3)]
    return computerChoice
//this function could be make it whit using if , if else and else to select the rock, paper or scissor 
}

function getHumanChoice(){
    let HumanChoice=window.prompt('Select one of these rock, paper, scissors right now this game is cases sensitve')
 return HumanChoice
 // this function get the human choice using a prompt window
}

