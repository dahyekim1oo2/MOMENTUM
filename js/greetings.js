

// 로그인 정보 가져오기
const loginForm =document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting");


// 일반적으로 str만 포함되거나, 중요한 정보를 담은 변수가 아니면 변수이름을 대문자로 표현함
// str을 반복적으로 사용할경우에는 객체를 생성해서 사용하는 거싱 좋다.!
const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username";

// 함수명 (event )방금 일어난 이벤트에 대한 정보가  event 에 저장됨 이벤트 타입{이벤트 발생 좌표}
function onLoginSubmit(event){
    // .preventDefault() :태그에 해당하는 브라우저 기본 동작을 삭제(제어)
    event.preventDefault();
    // 사용자 이름을 받아와  username에 저장
    const userName=loginInput.value;
    console.log(userName);
    //입력 양식을 숨겨줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //정보저장하기
    localStorage.setItem(USERNAME_KEY, userName);
    // user에게 인사하기!
    paintGreetings(userName);
}

function paintGreetings(username){
    //greetin에 우선적으로 text를 추가하고
    greeting.innerHTML =`Hello ${username} `;
    // 숨김 기능을 제거
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//localStorage에 저장된 username을 받아옴
const savedUsername=localStorage.getItem(USERNAME_KEY);

// 만약 저장된 사용자가 없다면 입력폼의 hidden을 제거하고 사용자에게 입력받음
if(savedUsername === null){ 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm .addEventListener("submit",onLoginSubmit);
}else{ //저장된 user가 있다면
    paintGreetings(savedUsername);
}



