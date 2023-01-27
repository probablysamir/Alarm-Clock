//This function is called directly via the alternation of the body tag
function updateTime(){
    let currentDate = new Date();
    var cHour = currentDate.getHours();
    var cMin = currentDate.getMinutes();
    var cSec = currentDate.getSeconds();
    var ampm = cHour>12?"PM":"AM";
    cHour = cHour>12?cHour-12:cHour;
    cHour = cHour<10?"0"+cHour:cHour;
    cMin = cMin<10?"0"+cMin:cMin;
    cSec = cSec<10?"0"+cSec:cSec;
    let currentTime = document.querySelector('.current-time');
    currentTime.innerText = cHour+":"+cMin+":"+cSec+ampm;
}

alarmButton = document.getElementById('alarm-button')
alarmButton.addEventListener('click',function(){
    var alarm = document.getElementById('alarm');
    console.log(alarm);
    alarm.play(); 
})