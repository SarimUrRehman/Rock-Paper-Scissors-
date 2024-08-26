


const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#message");
UserScorepara = document.querySelector("#userScore");
CompScorepara = document.querySelector("#CompScore");



const compChoice = () =>{
    const options = ["Rock" , "Paper" , "Scissors"];
    const Rdidx = Math.floor(Math.random() * 3);
    return options[Rdidx];
    
};

const DrawGame = () => {
    console.log("Game is Draw ");
    mess.innerText = "Game is Draw";
    mess.style.backgroundColor = "#FFAF00";
    mess.style.color = "white";
};

let UserScore = 0;
let CompScore =0;

const showWinner = (UserWin , ComChoice , UserChoice) => {
    if(UserWin){
        console.log("You win");
        mess.innerText = `you win. your ${UserChoice} beats ${ComChoice}`;
        mess.style.backgroundColor = "green";
        mess.style.color = "white";
        UserScore++;
        UserScorepara.innerText = UserScore;

        }else{
        console.log("You lose");
        mess.innerText = `you lose. ${ComChoice} beats your ${UserChoice}`;
        mess.style.backgroundColor = "Red";
        mess.style.color = "white";
        CompScore++;
        CompScorepara.innerText = CompScore;

    }
};

const playGame = (UserChoice) =>{
    console.log("user choice " , UserChoice);
    const ComChoice = compChoice();
    console.log("Comp Choice" , ComChoice);


   if(UserChoice === ComChoice){
      DrawGame();
   
    }else{
    let UserWin = true;

    if(UserChoice === "Rock"){
       UserWin =  ComChoice === "Paper" ? false : true ;
    }else if(UserChoice === "Paper"){
         UserWin = ComChoice === "Scissors" ? false :true ;
    }else{
         UserWin = ComChoice === "Rock" ? false : true ;
    }
    showWinner(UserWin , ComChoice , UserChoice);
}
   
    
};



choices.forEach((choice) => {
     choice.addEventListener("click" , () => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
     });
});