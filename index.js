var menu = document.getElementById("menu-id");

function showMenu(){
    menu.style.visibility = "visible";
}

function hideMenu(){
    menu.style.visibility = "hidden";
}



function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let formate = "AM";

    if(hours === 0)
    hours = 12;
    if(hours > 12){
        hours = hours-12;
        formate = "PM"; 
    }
    if(hours<10)
    hours = '0'+hours; 

    if(min<10)
    min = '0'+min;
    
    if(sec<10)
    sec = '0'+sec;
    let finalTime = `${hours}:${min}:${sec}` 

    document.getElementById("time").innerHTML = finalTime;
    document.querySelector("small").innerText = formate;
    setInterval(digitalClock,1000);
}

digitalClock();