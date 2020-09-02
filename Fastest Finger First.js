var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function shuffle(numbers_array) {
    var array_length = numbers_array.length;
    var temp, index;
    //When there are elements
    while(array_length > 0){
        //Pick a random index
        index= Math.floor(Math.random() * array_length);
        //Decrease array_length by 1
        array_length--;
        //Swap the last element with it
        temp = numbers_array[array_length];
        numbers_array[array_length] = numbers_array[index];
        numbers_array[index] = temp;
    }
    return numbers_array;
}

var StartGame = document.getElementById("StartGame");
var squares = document.getElementsByClassName("square");
var countdown = document.querySelector("#countdown");
var countdownNumber = 4;
var p = document.querySelectorAll("p");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var totalSeconds = 0;
StartGame.addEventListener("click", function(){
    StartGame.style.display = "none";
    // countdown.style.display = "block";
    //For the 3...2...1...countdown
    setInterval(function(){
    // if(countdownNumber > 0){
    //     console.log(countdownNumber--);
    // }else{
    //     clearInterval(returnValue);
    // }
    if(countdownNumber > 1){
        countdownNumber--;
        countdown.textContent = String(countdownNumber);
        countdown.style.display = "block";
    }else{
        countdown.style.display = "none";
    }
}, 800);
    shuffle(numbers); //To get different order of numbers every time
    setTimeout(function(){
        p[0].style.display = "block";
        p[1].style.display = "block";
        for(var i = 0 ; i < 20 ; i++){
            squares[i].textContent = String(numbers[i]);
            squares[i].style.display = "block";
        }
        var returnValue = setInterval(setTime, 1000); //To calculate the time
        console.log(returnValue);
    }, 3200);
});

function setTime(){
    ++totalSeconds;
    minutes.textContent = minuteSecondTime(parseInt(totalSeconds / 60));
    seconds.textContent = minuteSecondTime(totalSeconds % 60);
}

function minuteSecondTime(time){
    var string = time + "";
    if(string.length < 2){
        return "0"+string;
    }else {
        return string;
    }
}

//On clicking the numbers
for(var i = 0 ; i < 20 ; i++){
    squares[i].addEventListener("click", function(event){
        event.target.textContent = Number(event.target.textContent) + 20;
        event.target.addEventListener("click", function(){
            if(this.textContent === "40"){
                this.style.backgroundColor = "white";
                this.textContent = "";
                popUp();
            }else{
                this.style.backgroundColor = "#232323";
                this.textContent = "";
            }
        });
    });
}

function popUp(){
    alert("Done with the game!!!");
}

//When all the squares have disappeared, stop the timer










