// let sahibi=document.querySelector(".col-4")
// let nomre=document.querySelector(".num")

    let sahibi=document.querySelector(".sahibi");
    let nomre=document.querySelector(".nomre");
    let tarix=document.querySelector(".tarix");



let cardsahib = document.querySelector(".c");
let cardnomre = document.querySelector(".n");
let cardtarix = document.querySelector(".t");
sahibi.addEventListener("keyup",() =>{
    cardsahib.innerHTML=sahibi.value;
});
nomre.addEventListener("keyup",() =>{
    cardnomre.innerHTML=nomre.value;
});
tarix.addEventListener("keyup",() =>{
    cardtarix.innerHTML=tarix.value;
});
