const clock =document.querySelector("#clock");
const clockSec=document.querySelector("#clockSec");

function getClock() {
    const date=new Date();

    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");


    clock.innerText=`${hours}:${minutes}`
    clockSec.innerText=`(${seconds})`;
}
// 웹사이트가 load되자마자 getClock()을 실행하고 매초 시행되도록
getClock();
setInterval(getClock, 1000);

