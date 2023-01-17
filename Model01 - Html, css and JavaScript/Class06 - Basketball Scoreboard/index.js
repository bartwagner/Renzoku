/* Score*/
let SumHomeScore = 0
let SumGuestScore = 0
let homeScore = document.getElementById("home-score")
let GuestScore = document.getElementById("guest-score")
/* Score*/

/* Timer and Period variable*/
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;
let periodTime = document.getElementById("period-time")
let periodValue = 1
/* Timer and Period variable*/

/* Score Functions*/
function highlight(){
    if (SumHomeScore > SumGuestScore){
        document.getElementById("home-score").style.background = "orange"
        document.getElementById("guest-score").style.background = "black"        
    }
    else if (SumGuestScore > SumHomeScore ) {
        document.getElementById("guest-score").style.background = "orange"
        document.getElementById("home-score").style.background = "black"
    }else{
        document.getElementById("guest-score").style.background = "black"
        document.getElementById("home-score").style.background = "black"
    }
} 

function counthome(value){
    SumHomeScore += value
    homeScore.innerText = SumHomeScore
    highlight()
}

function countguest(value){
    SumGuestScore += value
    GuestScore.innerText = SumGuestScore
    highlight()
}

function homeone(){
    counthome(1)
}

function hometwo(){
    counthome(2)
}

function homethree(){
    counthome(3)
}

function guestone(){
    countguest(1)
}

function guesttwo(){
    countguest(2)
}

function guestthree(){
    countguest(3)
}

function newgame(){
    homeScore.innerText = 0    
    GuestScore.innerText = 0
    SumHomeScore = 0
    SumGuestScore = 0
    document.getElementById("home-score").style.background = "black"
    document.getElementById("guest-score").style.background = "black"
    resettime()
    periodTime.innerText = 1
    periodValue = 1
}

/*Time and Period, Actions and Functions */
document.getElementById('start-timer').addEventListener('click', 
    ()=>{
            starttime()
        }
);

document.getElementById('pause-timer').addEventListener('click', 
    ()=>{
            pausetimer()
        }
);

document.getElementById('reset-timer').addEventListener('click',
    ()=>{
            resettime()
        }
);

function displayTimer(){    
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;


    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 10){
                if (periodValue < 4){
                    periodValue += 1
                    periodTime.innerText = periodValue
                    resettime()
                    starttime()
                }else
                    pausetimer()
            }
        }
    }
    timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}

function pausetimer(){
    clearInterval(int);    
}

function starttime(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);    
}

function resettime(){
    clearInterval(int);
    [milliseconds,seconds,minutes] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 000';    
}