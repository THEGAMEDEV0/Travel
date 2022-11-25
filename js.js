let input=document.querySelector("input")
let Trip=document.querySelector(".Trip-Booker")
console.log("LINKED")
document.querySelector("button").onclick=function CHECKER(){
    console.log("BUTTON LINK WORKS")
    if (input.value==="LV101","TEST101") {
        alert("You have accses and will be redricted to the home page now!Press OK to countinue")
        location.href = 'ACCSES PAGE/index (2).html'
    }
    else{
        alert("No accses ")
    }
}


