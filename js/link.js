const plus=document.getElementById("plusIcon");
const iconbox=document.getElementById("iconbox");
const linkName=document.getElementById("name");
const siteLink=document.getElementById("linkinput");
const linkBtn=document.getElementById("linkBtn");
const linkplusBox=document.getElementById("linkplus");
const clearBtn=document.getElementById("clear");


const ico=['1.png','3.png','4.png'];
let site=[];

function savesite(){
    localStorage.setItem("site",JSON.stringify(site));
}

function hiddenBox(){
    linkplusBox.classList.toggle('hidden');
}

plus.addEventListener("click", hiddenBox);

function imgError(image){
    image.style.display = 'none';
}

function deletelink(link){
    // 박스를 2중으로 사용했기 때문에 부모의 부모 엘리먼트를 지워야함
    let div=link.target.parentElement.parentElement;
    console.log(div)
    div.remove();
    // 정보는 안에 있는 박스에 들어 있기 때문에 자식노드로 한단계 이동
    div=div.lastElementChild ;
    //해당 id를 갖는 배열을 삭제후 site배열을 다시 저장
    site=site.filter((sites)=>sites.id !==parseInt(div.id));
    console.log(site);
    savesite();

}
function paintIcon(newsite){
    const span=document.createElement("span");
    const div=document.createElement("div");
    const a=document.createElement("a");
    const img=document.createElement("img");
    const btn=document.createElement("button");
    div.id=newsite.id;

    span.innerText=newsite.name;
    img.src =`./img/${ico[Math.floor(Math.random() * 3)]}`;
    img.classList.add('iconSize');
    a.href=newsite.link;
    btn.innerText="❌";
    btn.addEventListener("click",deletelink);


    a.appendChild(img);
    div.appendChild(span);
    div.appendChild(btn);
    iconbox.appendChild(a);
    iconbox.appendChild(div);

}

function saved(){
    if(site.length<5){
        const sitename=linkName.value;
        const address=siteLink.value;
        linkName.value="";
        siteLink.value="";
        // 이름과 주소가 모두 비어있는경우 사용자에게 경고창 띄우기
        if(sitename===''||address===''){
            alert("정보를 입력하세요!")
        // 입력받은 사이트의 주소가 정확하지 않을시("https://") 경고문구를 출력
        }else if(! address.startsWith("https://")){
            alert("정확한 정보를 입력하세요")
         // 이름과 주소가 모두 올바르게 입력되었으면 사이트를 저장하고 출력함 
        }else{
            const newsite={
                name: sitename,
                link: address,
                id: Date.now(),
            };
            site.push(newsite);
            paintIcon(newsite);
            savesite();
        }
        
    }else{
        alert("더이상 추가할수 없습니다.")

    }
    
}
linkBtn.addEventListener('click',saved);

const savedsite=localStorage.getItem('site');
if(savedsite){
    const parsedSite=JSON.parse(savedsite);
    site=parsedSite;
    parsedSite.forEach(paintIcon);

}
function clear(){
    site=[];
    savesite();

    while(iconbox.hasChildNodes()){
        iconbox.removeChild(iconbox.firstChild);
    }
}
clearBtn.addEventListener('click',clear);
