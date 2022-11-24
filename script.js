//The Clocks
Clocking();

function Clocking() {
    let date = new Date();

    let session = "AM";

    let theSession = document.getElementById("the-session");
    let theDay = document.getElementById("the-day");

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let day = date.getDay();

    theSession.innerText = session;
    let presentDay = weekday[day];
    theDay.innerText = presentDay;



    //The Digital Clock
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour -= 12
        session = "PM";
        theSession.innerText = session;
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    let theClock = document.getElementById("the-clock");
    
    let time = hour + " " + ":" + " " + minute + " " + ":" + " " + second

    theClock.innerText = time;



    //The Analog Clock 
    const secondsRatio = date.getSeconds() / 60;
    const minutesRatio = date.getMinutes() / 60;
    const hoursRatio = date.getHours() / 12;

    const secondHand = document.getElementById("secondHand");
    const minuteHand = document.getElementById("minuteHand");
    const hourHand = document.getElementById("hourHand");

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

    function setRotation(element, rotationRatio) {
        element.style.setProperty("--rotation", rotationRatio * 360);
    }
    
    
    setTimeout(Clocking, 1000);
}



//Variables for the clocks themselves
const alpha = document.getElementById("alpha");
const digitalClock = document.getElementById("digitalClock");
const analogClock = document.getElementById("analogClock");
const stopWatchClock = document.getElementById("stopWatch");


//Variables for the selection buttons
const clockChangeDigital = document.getElementById("clockChangeDigital");
const clockChangeAnalog = document.getElementById("clockChangeAnalog");
const clockChangeStopWatch = document.getElementById("clockChangeStopWatch");


//The event listeners for the selection buttons
clockChangeDigital.addEventListener("click", () => {
    digitalClock.style.display = "block";
    alpha.classList.remove("analog");
    alpha.classList.remove("stopwatch");
    analogClock.style.display = "none";
    stopWatchClock.style.display = "none";

    clockChangeDigital.style.opacity = "1";
    clockChangeAnalog.style.opacity = "0.2";
    clockChangeStopWatch.style.opacity = "0.2";
})

clockChangeAnalog.addEventListener("click", () => {
    analogClock.style.display = "block";
    alpha.classList.remove("stopwatch");
    alpha.classList.add("analog");
    digitalClock.style.display = "none";
    stopWatchClock.style.display = "none";

    clockChangeAnalog.style.opacity = "1";
    clockChangeDigital.style.opacity = "0.2";
    clockChangeStopWatch.style.opacity = "0.2";
})

clockChangeStopWatch.addEventListener("click", function () {
    stopWatchClock.style.display = "block";
    alpha.classList.remove("analog");
    alpha.classList.add("stopwatch");
    digitalClock.style.display = "none";
    analogClock.style.display = "none";

    clockChangeStopWatch.style.opacity = "1";
    clockChangeDigital.style.opacity = "0.2";
    clockChangeAnalog.style.opacity = "0.2";
})



//The Timer
let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;

const playPause = document.getElementById("playPause");
const reset = document.getElementById("reset");

timerInterval = null;
timerStatus = "stopped";

function stopWatcher() {
    secondCount++;

    if (secondCount / 60 === 1) {
        secondCount = 0;
        minuteCount++;

        if (minuteCount / 60 === 1) {
            minuteCount = 0;
            hourCount++;
        }
    }

    leadingHourCount = (hourCount < 10) ? "0" + hourCount : hourCount;
    leadingMinuteCount = (minuteCount < 10) ? "0" + minuteCount : minuteCount;
    leadingSecondCount = (secondCount < 10) ? "0" + secondCount : secondCount;

    let stopWatchBox = document.getElementById("stopWatchBox");
    
    stopWatchBox.innerText = leadingHourCount + " " + ":" + " " + leadingMinuteCount + " " + ":" + " " + leadingSecondCount;
}


playPause.addEventListener("click", function () {
    if (timerStatus == "stopped") {
        timerInterval = setInterval(stopWatcher, 1000);
        playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        timerStatus = "started";  
    }
    else {
        clearInterval(timerInterval);
        playPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
        timerStatus = "stopped";
    }
        
})

reset.addEventListener("click", function () {
    clearInterval(timerInterval);
    hourCount = 0;
    minuteCount = 0;
    secondCount = 0;
    playPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
    stopWatchBox.innerText = "00 : 00 : 00"
})


