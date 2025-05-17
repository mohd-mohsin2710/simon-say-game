
//                                   <!-- SIMON-SAYS GAME -->

let gameSeq = [];
let userSeq = [];
let btns = ["yellow" , "red" , "green" , "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress" , function () {
    if (started==false) {
        console.log("Game is started");
        started = true;
        
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}


function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level-${level} `;


    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx){
    
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = ` Game Over!!.. Your Score was  <b>${level}</b>  <br> Press any key to restart..`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },400);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length -1);
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}