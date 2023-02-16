function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = getPin();
    const pinField = document.getElementById("pin-field");
    pinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const label = event.target.innerText;
    const typeNumberField = document.getElementById('typeNumber');
    const previousNumberField = typeNumberField.value;

    if (isNaN(label)) {
        if (label === 'C') {
            typeNumberField.value = '';
        } else if (label === '<') {
            const digits = previousNumberField.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    } else {
        const newNumber = previousNumberField + label;
        typeNumberField.value = newNumber;
    }
})

document.getElementById("verify-btn" ).addEventListener('click', function(){
    const displayPinField = document.getElementById("pin-field");
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typeNumber');
    const typePin = typeNumberField.value;

    const pinSuccessMessage = document.getElementById("pin-success");
    const pinFailureMessage = document.getElementById("pin-failure");

    if(currentPin === typePin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }else{
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block';
    }

})