let userName = prompt("Adınızı giriniz:")
let info = document.querySelector("#isim")
let timer1= document.querySelector("#time")
let dayString="";

// let hours=time.getHours();
// let min=time.getMinutes();
// let sec=time.getSeconds();

function timer(){
    let date = new Date();
    let day=date.getDay();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    switch(day) {
        case 0:
            dayString="Pazar"
            break;
        case 1:
            dayString="Pazartesi"
            break;
        case 2:
            dayString="Salı"
            break;
        case 3:
            dayString="Çarşamba"
            break;
        case 4:
            dayString="Perşembe"
            break;
        case 5:
            dayString="Cuma"
            break;
        case 6:
            dayString="Cumartesi"
            break;
    }
    timer1.innerHTML=`${hours}:${min}:${sec}  ${dayString}`
}

setInterval(timer)
info.innerHTML=`${userName[0].toUpperCase()}${userName.slice(1)}! `