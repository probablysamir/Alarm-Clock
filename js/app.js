//Initialization of variables
let inputTime = document.querySelector('#input-time');
let alarm = document.getElementById('alarm');
let setAlarm = document.querySelector('.set-alarm');
let stopAlarm = document.querySelector('.stop-alarm');
let currentDate, cHour, cSec, ampm, currentTime, time, rHour, rMin, rSec, alarmBeep;
let alarmFlag = 0;
let remainingTime=document.querySelector('.remaining-time');
let alarmAlert = document.querySelector('#alarm-alert');
setAlarm.addEventListener('click', function () {
    time = inputTime.value.split(":");
    alarmFlag=1;
    alarmAlert.innerText="The alarm will go after:";
    updateTime();
})
stopAlarm.addEventListener('click', function () {
    alarmFlag = 0;
    alarmOff();
})

//This function is called directly via the alternation of the body tag
function updateTime() {
    // console.log(inputTime.value);
    currentDate = new Date();
    cHour = currentDate.getHours();
    cMin = currentDate.getMinutes();
    cSec = currentDate.getSeconds();
    ampm = cHour > 12 ? "PM" : "AM";
    cHour = cHour > 12 ? cHour - 12 : cHour;
    cHour = cHour < 10 ? "0" + cHour : cHour;
    cMin = cMin < 10 ? "0" + cMin : cMin;
    cSec = cSec < 10 ? "0" + cSec : cSec;
    currentTime = document.querySelector('.current-time');
    currentTime.innerText = cHour + ":" + cMin + ":" + cSec + ampm;
    if (alarmFlag == 1) alarmCheck();
}
function alarmCheck() {
    cHour = ampm == "AM" ? cHour : parseInt(cHour) + 12;
    if (cHour == time[0] && cMin == time[1]) {
        alarmBeep = setInterval(alarmOn,1000);
        console.log(alarmBeep);
    }
    rMin=time[1]-cMin;
    rMin=rMin<0?rMin+60:rMin;
    rHour=time[0]-cHour-1;
    rHour=rHour<0?rHour+24:rHour;
    rSec=60-cSec;
    console.log(rHour);
    if(rHour==0 || rHour==23 && rMin==0){
        remainingTime.innerText="";
        alarmAlert.innerText="Ring Ring!!"
    }
    else{
        remainingTime.innerText=`${rHour} hours ${rMin} minutes ${rSec} seconds`
    }
}
function alarmOn(){
    if(alarmFlag==1){alarm.play();}
}

function alarmOff() {
    clearInterval(alarmBeep);
}
