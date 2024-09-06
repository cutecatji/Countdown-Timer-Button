let CountdownTimer;//Hold setInterval ID
let btn=document.querySelector("button");
btn.onclick=()=>{
    if(CountdownTimer)
        clearInterval(CountdownTimer);
    let timeleft=prompt("Enter Time in Seconds:");//set initial value
    document.querySelector("button").textContent=timeleft;
    CountdownTimer=setInterval(()=>{
        timeleft--;
        document.querySelector("button").textContent=timeleft;
        if(timeleft<0)
        {
            document.querySelector("button").textContent="Time Up Ms.Pooja!";
            clearInterval(CountdownTimer);
        }
    },1000)

}
