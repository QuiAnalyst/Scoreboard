let homeScoreEL = document.getElementById("homeScore");
let guestScoreEL = document.getElementById("guestScore");
let homeCount = 0;
let guestCount = 0;

function homeScoreadd1(){
    homeCount +=1;
    homeScoreEL.textContent = homeCount;
}

function homeScoreadd2(){
    homeCount +=2;
    homeScoreEL.textContent = homeCount;
}

function homeScoreadd3(){
    homeCount +=3;
    homeScoreEL.textContent = homecount;
}

function guestScoreadd1(){
    guestCount +=1;
    guestScoreEL.textContent = guestCount;
}

function guestScoreadd2(){
    guestCount +=2;
    guestScoreEL.textContent = guestCount;
}

function guestScoreadd3(){
    guestCount +=3;
    guestScoreEL.textContent = guestCount;
}
