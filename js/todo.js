const toDoForm = document.getElementById("todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoBtn =document.getElementById("todoBut");
// 가져와야하는 요소가 id나 class일때는 getElement를 쓰고 tagtype으로 가져올때는 querySelector를 사용하는듯?
const TODO_KEY="todos";
const DARK="drak";
// to_do_list를 저장하기  위한 array 생성하기
// paintTodo가 그려질때마다 그내용을 array에 저장
let todos=[];
function saveToDos(){
    
    localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}
function deleteTodo(event){
    //클릭이벤트가 발생한 정보에 포함되어었는 버튼의 상위 요소의 내용을 가져옴으로 해당버튼을 삭제
    const li=event.target.parentElement;
    li.remove();
    // 클릭이벤트가 발생한 li의 id를 가진 요소를 삭제하고 새 배열을 만듬
    //event에 저장되어있는 정보의 타입은 String형임 =>parseInt()를 사용하여 int형으로 변환
    todos=todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    if(todos.length === 0){
        toDoBtn.innerText=`Todo`;
    }
}
//
function paintTodo(newTodo){
    //li태그 생성 li>span/button 생성할RJdla
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");

    //li에 id 적용하기
    li.id=newTodo.id;
    
    //span을 li의 자식요소로 추가한 후 span에 newTodo의 내용을 입력
    span.innerText =newTodo.text;
    
    
    // 삭제 버튼만들기 => 버튼은 클릭 이벤트를 반영해야함! 
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);
    //button.addEventListener("click",deleteTodo);=> 많은 버튼중 어느버튼을 클릭했는지를 알수 없음 & 같은 함수를 사용함
    
    //html에 #todo-form에 위에서 생성한 요소 추가하기 append는 반드시 마지막에!
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    
    //값가져오고 저장하기
    event.preventDefault();
    const newTodo =toDoInput.value;
    //입력창 비우기
    toDoInput.value="";
    //array에 todo 항목 저장하기
    const newToDoObj={
        text: newTodo,
        id: Date.now(),

    };
    todos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
    
}


toDoForm.addEventListener("submit",handleToDoSubmit);
const saveTodos=localStorage.getItem("todos");

//로컬 스토리지에 저장되어있는 str형태의 todos를 불러옴
//만약 tods가 비어있다면 처음부터 시작하고 저장소에 저장되어 있다면 그걸 불러옴
if(saveTodos){
    //Str을 array 변경
    const parsedToDos=JSON.parse(saveTodos);
    // 배열의 요소를 하나씩 넘겨주면서 paintTodo()을 실행함
    todos=parsedToDos;
    parsedToDos.forEach(paintTodo);
}


// 클릭될때마다 TodoBox의 상태 변환
function hiddenBox(){
    // const boxOpen=!document.getElementById("todoListBox").classList.contains('hidden'); // false면 상자가 숨겨져 있는 상태 
    document.getElementById("todoListBox").classList.toggle('hidden');

    
}

toDoBtn.addEventListener("click", hiddenBox);
if(todos.length){
    toDoBtn.innerText=`Todos(${todos.length})`;
}