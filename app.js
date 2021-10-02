const billAmount = document.querySelector("#bill-input");
const paidAmount = document.querySelector("#paid-input");
const checkBtn = document.querySelector("#change-check");
const errorMsg = document.querySelector("#error-message");
const notes = document.querySelectorAll(".notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function hideError(){
    errorMsg.style.display = "none";
}

function errorDisplay(error){
    errorMsg.style.display = "block";
    errorMsg.innerText = error;
}

function calculateChange(change){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(change/availableNotes[i]);
        change = change % availableNotes[i];

        notes[i].innerText = numberOfNotes;
    }
}

checkBtn.addEventListener("click", function inputCheck(){

    if(billAmount.value > 0){
        if(paidAmount.value >= billAmount.value ){
            const changeAmount = paidAmount.value - billAmount.value;
            calculateChange(changeAmount);
        }else {
            errorDisplay("Do you wanna wash plates?");
        }
    }else {
        errorDisplay("Invalid Amount");
    }
});

