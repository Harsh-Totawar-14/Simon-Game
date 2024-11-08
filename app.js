// first step (key press se game start)

let gameSequence = [];
let userSequence = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }

    levelUp();
});


// second step (random button flash and level-1)

function gameFlash(anybtn){
    anybtn.classList.add("flash");      // white color
   setTimeout(function (){
    anybtn.classList.remove("flash");
   }, 200);
}

function userFlash(anybtn){
    anybtn.classList.add("userflash");       // green color
   setTimeout(function (){
    anybtn.classList.remove("userflash");
   }, 200);
}


function levelUp(){

    userSequence = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randomindex = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`)

    gameSequence.push(randomcolor);
    gameFlash(randombtn); // random btn choose
}


function checkAns(idx){
  

  if(userSequence[idx] === gameSequence[idx]){
    if(userSequence.length == gameSequence.length) {
        setTimeout(levelUp, 1000);
    }
  }else {
    h2.innerHTML = `Game Over!  your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },150);

    reset();
  }
}


function btnPress (){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    checkAns(userSequence.length-1);
};

let allbtn = document.querySelectorAll(".btn");
 for(btn of allbtn) {
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    gameSequence =[];
    userSequence = [];
    level = 0;
 }



