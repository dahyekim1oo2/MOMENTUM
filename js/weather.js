

const API_KEY="2b851f7e9ce29a17dd6acd8ad1b4bcfc"

// 사용자에게 위치를 받는걸 성공한 경우



function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude;//경도
    // 날씨 정보를 얻어올수 있는 url에 나의 정보를 제공한 url 변수 만들기
    //&units=metric 을 추가하면 화씨온도에서 섭씨온도로 변환된 결과가 나옴
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //petch를 사용하면 url을 사용할 필요가 없이 대신 url을 불러와줌
    //.json() 위치와 날씨에 관련된 정보가 들어있는 파일?더미?를 받아옴 
    // 그중 필요한 도시이름(name)과 weather array에 저장된 main(날씨)요소를 html에 삽입함
    


    fetch(url).then(Response => Response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        const  weatherIconCode = `${data.weather[0].icon}.png`;
        const weatherIcon = document.createElement("img");
        weatherIcon.src = `./img/icons/${weatherIconCode}`;
        weather.appendChild(weatherIcon);
        city.innerText=`${data.weather[0].main} / ${data.main.temp}`;

        
    })
    console.log(url);
    //내가 있는곳의 장소
    // 날씨
    // 온도 =>


}
// 사용자에게 위치를 받는걸 실패한 경우
function onGeoError(){
    alert("can't find you. No weather for you.");

}



// 사용자의 위치 좌표를 줌 (wifi,위치, GPS...)
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);