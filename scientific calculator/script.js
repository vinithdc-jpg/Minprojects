const screen = document.getElementById("screen");

let history = JSON.parse(localStorage.getItem("history")) || [];

function insert(value){
    screen.value += value;
}

function clearScreen(){
    screen.value="";
}

function backspace(){
    screen.value=screen.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = screen.value.replace(/%/g,"/100");

        let result = eval(expression);

        history.unshift(screen.value+" = "+result);

        if(history.length>20)
            history.pop();

        localStorage.setItem("history",JSON.stringify(history));

        loadHistory();

        screen.value=result;

    }
    catch{

        screen.value="Error";

    }

}

function square(){

    if(screen.value==="") return;

    screen.value=Math.pow(Number(eval(screen.value)),2);

}

function factorial(){

    let n=Number(eval(screen.value));

    if(n<0) return;

    let f=1;

    for(let i=1;i<=n;i++)
        f*=i;

    screen.value=f;

}

function randomNumber(){

    screen.value=Math.random();

}

function loadHistory(){

    const ul=document.getElementById("history");

    ul.innerHTML="";

    history.forEach(item=>{

        let li=document.createElement("li");

        li.innerText=item;

        ul.appendChild(li);

    });

}

function clearHistory(){

    history=[];

    localStorage.removeItem("history");

    loadHistory();

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter")
        calculate();

});

loadHistory();