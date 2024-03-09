let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) =>
{

    msg.innerText = `Congratulations! winner is:- ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() =>{
    for(let pattern of winPatterns){
        let pos1var = boxes[pattern[0]].innerText;
        let pos2var = boxes[pattern[1]].innerText;
        let pos3var = boxes[pattern[2]].innerText;
        if(pos1var!=""&& pos2var!=""&&pos3var!=""){
            if(pos1var === pos2var && pos2var === pos3var){
                console.log("The  winner is : ",pos1var);
                showWinner(pos1var);
                
            }

        }
    }

};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

