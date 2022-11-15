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
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    session = (hour >= 12) ? "PM" : session;
    
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

const alpha = document.getElementById("alpha");
const digitalClock = document.getElementById("digitalClock");
const analogClock = document.getElementById("analogClock");

const clockChangeAnalog = document.getElementById("clockChangeAnalog");
const clockChangeDigital = document.getElementById("clockChangeDigital");

clockChangeAnalog.addEventListener("click", () => {
    alpha.classList.toggle("analog");
    clockChangeAnalog.style.display = "none";
    clockChangeDigital.style.display = "block";
})

clockChangeDigital.addEventListener("click", () => {
    alpha.classList.toggle("analog");
    clockChangeDigital.style.display = "none";
    clockChangeAnalog.style.display = "block";
})