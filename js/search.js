const searchForm = document.getElementById("search");
const searchinput =searchForm.querySelector("input");

const selectLink = document.getElementById("sitelist");
const selectBox =  document.getElementById("linklist");
const span =document.querySelector(" #mainlink span");


const naverBtn=  document.getElementById("naver");
const googleBtn=  document.getElementById("google");
const daumBtn=  document.getElementById("daum");
let linktype="https://www.google.com/search?q=";

//사이트 주소바꾸기
function search(){ 
    const keyword=searchinput.value;
    let url=linktype+keyword;
    searchinput.value="";
    window.open(url);
}

function changeLink(event){
    const siteNum=event.srcElement.id;
    console.log(siteNum)
    if (siteNum ==="naver"){
        linktype=chooseSite[0].link;
        span.innerText=chooseSite[0].id;

    }else if(siteNum ==="google"){
        linktype=chooseSite[1].link;
        span.innerText=chooseSite[1].id;
    }else{
        linktype = chooseSite[2].link;
        span.innerText=chooseSite[2].id;
    }

}
const chooseSite=[
    {"id":"네이버","link":"https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="},
    {"id":"구글","link":"https://www.google.com/search?q="},
    {"id":"다음","link":"https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q="},
]
searchForm.addEventListener("submit",search);

selectBox.addEventListener("click",()=> selectLink.classList.toggle("hidden"));



naverBtn.addEventListener("click", changeLink);
googleBtn.addEventListener("click", changeLink);
daumBtn.addEventListener("click", changeLink);
document.querySelector(".selectLink").addEventListener("mouseover",()=>selectBox.classList.toggle("hidden"));
