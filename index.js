var session_time=0;
var break_time=0;
var start_button=document.getElementById("start-button");
var reset_button=document.getElementById("reset-button");
var mm=0;
var ss=0;
var flag=0;
var counter=0;
var session_count=1;
var timer=setInterval(function(){
    if(flag==1){
        if(mm!=0 || ss!=0)
        {   
            
            if(ss==0){
                mm--;
                ss=59;
            }
            else{
                ss=ss-1;
            }
            if(mm<10){
                mm="0"+mm;
                mflag=1;
            }
            if(ss<10){
                ss="0"+ss;
                sflag=1;
            }

            document.getElementById("time").innerHTML=mm+":"+ss;

            if(mflag=1){
                mm=mm-"0";
            }
            if(sflag==1){
                ss=ss-"0";
            }

        }
         else
        {   if(counter%2==0){
                mm=break_time-1;
                ss=59;
                document.getElementById("time").style.color="#e93a0f";
                document.getElementById("session-count").innerHTML="Break !";
            }
            else{
                mm=session_time-1;
                ss=59;
                session_count++;
                document.getElementById("time").style.color="rgba(44, 184, 177, 0.966)";
                document.getElementById("session-count").innerHTML="Session "+session_count +" !";
            }
            counter++;
        }
    }
},100);
function sessionAdd(){
    session_time++;
    document.getElementById("st").innerHTML=session_time +" min";
};
function sessionSub(){
    if(session_time==0)
    return;
    session_time--;
    document.getElementById("st").innerHTML=session_time + " min";
};
function breakAdd(){
    if(session_time==0)
    return;
    break_time++;
    document.getElementById("brt").innerHTML=break_time +" min";
};
function breakSub(){
    if(session_time==0)
    {
        break_time=0;
        document.getElementById("brt").innerHTML=break_time+" min";
        return;
    }
    break_time--;
    if(break_time==-1)
    break_time++;
    document.getElementById("brt").innerHTML=break_time+" min";
};
function start(){
    if(session_time>0){
        flag=1;
        start_button.innerHTML="Pause";
        start_button.setAttribute("onclick","pause()");
        mm=session_time-1;
        ss=59;
        
    }
};
function pause(){
    flag=0;
    start_button.innerHTML="Play";
    start_button.setAttribute("onclick","play()");
};
function play(){
    flag=1;
    start_button.innerHTML="Pause";
    start_button.setAttribute("onclick","pause()");
};
function reset(){
    mm=0;
    ss=0;
    flag=0;
    counter=0;
    session_count=0;
    start_button.innerHTML="Start";
    start_button.setAttribute("onclick","start()");
    document.getElementById("time").innerHTML="00:00";
    document.getElementById("session-count").innerHTML="Session 1 !";
    session_time=0;
    break_time=0;
    document.getElementById("st").innerHTML=session_time +" min";
    document.getElementById("brt").innerHTML=break_time + " min";
};

