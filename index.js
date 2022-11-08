let countHome =0
let scoreHome = document.getElementById("home-score")
let countGuest = 0
let scoreGuest = document.getElementById("guest-score")

/*Add points to Home score board*/

function home1(){
    countHome +=1
    scoreHome.textContent = countHome
}
function home2(){
    countHome +=2
    scoreHome.textContent =  countHome
}
function home3(){
    countHome +=3
    scoreHome.textContent =  countHome
}


/*Add points to Guest score board*/

function guest1(){
    countGuest +=1
    scoreGuest.textContent =  countGuest
}
function guest2(){
    countGuest +=2
    scoreGuest.textContent =  countGuest
}
function guest3(){
    countGuest +=3
    scoreGuest.textContent =  countGuest
}


/*Reset points to 0*/

function resetHome(){
    countHome = 0
    scoreHome.textContent = "0"
}
function resetGuest(){
    countGuest = 0
    scoreGuest.textContent = "0"
}