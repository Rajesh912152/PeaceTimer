let btn1El=document.getElementById('btn1');
let btn2El=document.getElementById('btn2');
let btn3El=document.getElementById('btn3');
let btn4El=document.getElementById('btn4');

let spanEl=document.getElementById('span');


/*function btn(){
    x.onclick=function(){
        count=y
        let uniqueNo=setInterval(function(){
            spanEl.textContent=count+" Seconds left"
            count=count-1
            if(count===-1){
                clearInterval(uniqueNo)
                spanEl.textContent="Your Momemt Is Completed"
            }
        },1000);
    }
}
btn1El.onclick=function(){
    btn(x=btn1El,y=20)
}
btn2El.onclick=function(){
    btn(x=btn2El,y=30)
}
btn3El.onclick=function(){
    btn(x=btn3El,y=40)
}
btn4El.onclick=function(){
    btn(x=btn4El,y=60)
}
*/
let uniqueNo;
let seconds=0

function clearIntervalTimer(){
    clearInterval(uniqueNo)
}

btn1El.onclick=function(){
    seconds=20
    clearIntervalTimer();
    setIntervalTimer()
}

btn2El.onclick=function(){
    seconds=30
    clearIntervalTimer();
    setIntervalTimer()
}

btn3El.onclick=function(){
    seconds=40
    clearIntervalTimer();
    setIntervalTimer()
}

btn4El.onclick=function(){
    seconds=60
    clearIntervalTimer();
    setIntervalTimer()
}

function setIntervalTimer(){
    spanEl.textContent=seconds+" Seconds left"
    uniqueNo=setInterval(startTimer,1000)
}

function startTimer(){
    if(seconds>1){
        seconds=seconds-1;
        spanEl.textContent=seconds+" Seconds left"
    }
    else{
        clearIntervalTimer()
        spanEl.textContent="Your Momemt Is Completed"
    }
}