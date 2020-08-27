var gameOver = false;
var winningScore = 5;

var p1button = document.querySelector("#p1button");
var p1display = document.querySelector("#p1display");
var p1score = 0;
p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score+=1;
        if(p1score === winningScore){
            p1display.style.color = "green";
            p1display.textContent = p1score;
            gameOver = true;
        }else{
            p1display.textContent = p1score; 
        }  
    }
});



var p2button = document.querySelector("#p2button");
var p2display = document.querySelector("#p2display");
var p2score = 0;
p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score+=1;
        if(p2score === winningScore){
            p2display.style.color = "green";
            p2display.textContent = p2score;
            gameOver = true;
        }else{
            p2display.textContent = p2score; 
        }  
    }
});


function reset() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.style.color = "black";
    p2display.style.color = "black";
    gameOver = false;
}

var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function(){
    reset();
});


var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = Number(numInput.value);
    winningScore = Number(numInput.value);
    reset();
});


