




// have to solve some poblem



var time = 0;
var runing = 0;

function    start(){
    if(runing == 0){
        runing = 1;
        document.getElementById("start").innerHTML="Pause"
        // document.getElementById("pueshstart").style.backgroundColor="red"
    }

    else {
        runing = 0;
        document.getElementById("start").innerHTML="Resume"
        // document.getElementById("pueshstart").style.backgroundColor="green"
    }
}


function reset(){
    runing =0 ;
    document.getElementById("start").innerHTML="Start";
    document.getElementById("output").innerHTML="0:00:00:00";
    // document.getElementById("start").style.backgroundColor="white";
   
}

function increment(){
    if(runing == 1){

        setTimeout(function(){
                time++;
                var mins = math.floor(time/10/60);
                var secs = math.floor(time/10%60);
                var hours = math.floor(time/10/60/60);

                if(mins < 10){
                    mins ="0"+ mins;
                }
                if(secs < 10){
                    secs="0"+ secs;
                }
                document.getElementById("output").innerHTML= hours + ":" + mins + ":" + secs; 
                increment();
        },100)

    }
}