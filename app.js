let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.style.height="100vmin";
    msgContainer.classList.remove("hide");
}

const draw=()=>{
    msg.innerText="Draw";
    msgContainer.classList.remove("hide");
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val && count!=9){
            showWinner(pos1Val);
            disableboxes();
        }
    else if( pos1Val !="" && pos2Val !="" && pos3Val !="" && count===9){
        draw();
    }
    }
}
}

let count=0;
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            if(box.innerText==="O"){
                box.style.color="#931621";
            }
            turnO=false;
            count++;
            console.log("for o",count);
        }
        else
        {
            box.innerText="X";
            if(box.innerText==="X"){
                box.style.color="#28464B";
            }
            turnO=true;
            count++;
            console.log("for x",count);
        }
        box.disabled=true;
        checkWinner();
    });
    
});

const resetfunc=()=>{
    turnO=true;
    count=0;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    msgContainer.classList.remove("hide");
    msgContainer.style.height="10vmin";
    msg.innerText="";
}

reset.addEventListener("click",resetfunc);
newGameBtn.addEventListener("click",resetfunc);

