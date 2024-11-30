let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let hideGame=document.querySelector(".fullGame");
let historyBtn = document.querySelector(".review");
let newGameBtn2 = document.querySelector(".newGame");
console.log(newGameBtn2);
let turnO=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
hideGame.classList.remove("hide");
resetBtn.classList.remove("hide");
newGameBtn2.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
              if(turnO){
                box.innerText="O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled = true;
            checkWinner();
        });
});

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    hideGame.classList.add("hide");

};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
   
        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val === pos2val && pos2val === pos3val ){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
    
};
const showHistory=()=>{
   msgContainer.classList.add("hide");
    disableBoxes();
    hideGame.classList.remove("hide");
    newGameBtn2.classList.remove("hide");
    resetBtn.classList.add("hide");
};
const seeHistory=()=>{
   showHistory();

}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
historyBtn.addEventListener("click",seeHistory);
newGameBtn2.addEventListener("click",resetGame);