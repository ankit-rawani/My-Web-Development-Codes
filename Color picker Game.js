var colors = randomColors(6);
var goalColor = theGoalColor();
var displayColor = document.getElementById("displayColor");
displayColor.textContent = goalColor;
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");
var mode = "hard";

var squares = document.querySelectorAll(".square");
for(var i = 0; i<squares.length; i++){

    //Coloring the squares
    squares[i].style.backgroundColor = colors[i];

    //Grabbing the clicked color and checking if correct or not
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === goalColor){
            displayMessage.textContent = "Correct !";
            changeColor(goalColor);
            h1.style.backgroundColor = goalColor;
            newColors.textContent = "Play Again ?"
            easyBtn.addEventListener("click", function(){
                newColors.textContent = "New Colors";
                displayMessage.textContent = "Choose The Apt Color !";
            });
            hardBtn.addEventListener("click", function(){
                newColors.textContent = "New Colors";
                displayMessage.textContent = "Choose The Apt Color !";
            });
            newColors.addEventListener("click", function(){
                displayMessage.textContent = "Choose The Apt Color !";
            });

        }else{
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again, You Can Do It !";
        }
    });
}

function changeColor(color){
    //looping through all the squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function theGoalColor(){
    var randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

function randomColors(num){
    //Declare an empty array
    var arr = [];
    //A loop that runs through num times
    for(var i=0; i<num; i++){
        arr.push(generateARandomColor());
    }
    //return arr
    return arr;
}

function generateARandomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

newColors.addEventListener("click", function(){
    //Generate random colors
    if(mode === "hard"){
        colors = randomColors(6);
    }else{
        colors = randomColors(3);
    }
    //Pick a color randomly form the randomly generated color
    goalColor = theGoalColor();

    //Change the rgb() in h1 to goalColor
    displayColor.textContent = goalColor;
    //Change the colors on the squares
    if(mode === "hard"){
        for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
    }else{
        for(var i = 0; i<squares.length; i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.display = "none";
            }
        }
    }
    

    //change the background color of h1
    h1.style.backgroundColor = "steelblue";

    //Chnage the textContent to New Colors once clicked on Play Again ?
    if(this.textContent === "Play Again ?"){
        this.textContent = "New Colors";
    }
});

easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = randomColors(3);
    goalColor = theGoalColor();
    displayColor.textContent = goalColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    //make h1's background to #232323 after winning a game and then you continue playing by click either hard or easy
    h1.style.backgroundColor = "steelblue";   

    mode = "easy";
    
});

hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = randomColors(6);
    goalColor = theGoalColor();
    displayColor.textContent = goalColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    //make h1's background to #232323 after winning a game and then you continue playing by click either hard or easy
    h1.style.backgroundColor = "steelblue"; 
    
    mode = "hard";
});

h1.style.transition = "background 0.3s";





