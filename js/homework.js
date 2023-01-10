const clockTitle = document.querySelector(".js-clock");

function countXMas(){
    const today=new Date();
    const xMas=new Date(String(today.getFullYear())+'-12-25');
    const dDay=xMas-today;

    const day =Math.floor (dDay/(1000*60*60*24));
    const hours=Math.floor((dDay/(1000*60*60))%24);
    const minutes=Math.floor((dDay/(1000*60))%60);
    const seconds=Math.floor((dDay/1000)%60);

    clockTitle.innerText=`X-Mas - ${day}일 ${hours}시 ${minutes}분 ${seconds}초 남았습니다!`;


}

countXMas();
setInterval(countXMas,1000);