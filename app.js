let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_dov = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}
function convertToLetter(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToLetter(user)}${smallUserWord} beats ${convertToLetter(computer)}${smallCompWord} ,You Win 🥳🔥`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'),300);

}


function loose(user,computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToLetter(computer)}${smallCompWord} beats ${convertToLetter(user)}${smallUserWord} ,You Lost 🤣`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'),300);
}
function draw(user,computer){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToLetter(user)}${smallUserWord} equall ${convertToLetter(computer)}${smallCompWord} ,It's a draw`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'),300);
}

function main(){
    rock_div.addEventListener('click',() => game("r"))
    paper_div.addEventListener('click',() => game("p"))
    scissors_div.addEventListener('click',()  => game("s"))
}

main();
