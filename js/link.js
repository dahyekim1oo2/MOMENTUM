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
function paintIcon(newsite){
    const span=document.createElement("span");
    const div=document.createElement("div");
    const a=document.createElement("a");
    const img=document.createElement("img");

    span.innerText=newsite.name;
    img.src =`./img/${ico[Math.floor(Math.random() * 3)]}`;
    img.classList.add('iconSize');
    a.href=newsite.link

    a.appendChild(img);
    div.appendChild(a);
    div.appendChild(span);
    iconbox.appendChild(div);

}

function saved(){
    if(site.length<5){
        const sitename=linkName.value;
        const address=siteLink.value;
        linkName.value="";
        siteLink.value="";
        if(sitename===''||address===''){
            alert("정보를 입력하세요!")
        }else{
            const newsite={
                name: sitename,
                link: address,
            };
            site.push(newsite);
            paintIcon(newsite);
            savesite();
        }
        
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