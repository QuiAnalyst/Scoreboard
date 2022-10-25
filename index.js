let homeScoreEL = document.getElementById("homeScore");
let guestScoreEL = document.getElementById("guestScore");
let count = 0;

function homeScoreadd1(){
    count +=1;
    homeScoreEL.textContent = count;
}

function homeScoreadd2(){
    count +=2;
    homeScoreEL.textContent = count;
}

function homeScoreadd3(){
    count +=3;
    homeScoreEL.textContent = count;
}

function guestScoreadd1(){
    count +=1;
    guestScoreEL.textContent = count
}

function guestScoreadd2(){
    count +=2;
    guestScoreEL.textContent = count
}

function guestScoreadd3(){
    count +=3;
    guestScoreEL.textContent = count
}
