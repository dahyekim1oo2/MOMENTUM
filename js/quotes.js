const quotes=[
    {
        quote:"I am what I am, and I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth bothering' with.'",
        author:"",
    },
    {
        quote:"Arrogance and fear keep you from learning the simplest and most significant lesson of all.",
        author:"Thomas Jefferson",
    },
    {
        quote:"You are the light of my life, my precious son,my little Star-Lord.",
        author:"",
    },
    {
        quote:"Don`t aim for success if you want it just do what you love and believe in, and it will come naturally.",
        author:"",
    },
    {
        quote:"If watching is all you’re gonna do, then you’re gonna watch your life go by without ya.",
        author:"",
    },
    {
        quote:"When you go through hardships and decide not to surrender, that is strength",
        author:"Arnold",
    },
    {
        quote:"It’s up to you how far you’ll go.If you don’t try, you’ll never know.",
        author:"",
    },
    {
        quote:"There is no one who can’t fall. However, only those who get up again will learn how to move forward. ",
        author:"",
    },
    {
        quote:"Being genius is not enough, it takes courage to change people’s hearts.",
        author:"",
    },
    {
        quote:"The secret of getting ahead is getting started.",
        author:"",
    },
    {
        quote:"Study without desire spoils the memory, and it retains nothing that it takes in.",
    }


]

const quote=document.querySelector("#quotes span:first-child");


//Math.round() : 숫자를 반올림시킴
//Math.ceil() : 무조건 올림 1.01=>2
//Math.floor() : 무조건 내림 1.9 =>1
//math.random() *n : n미만의 난수가 생성됨 : n 미만의 수를 얻기 위해선 무조건 내림을 해줘야함
// quotes의 길이만큼의 랜덤한 난수를 생성
const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText=todaysQuote.quote;