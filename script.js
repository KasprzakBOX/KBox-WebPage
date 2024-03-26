var lastActiveInput = null;

function addToInput(value) {
    var phoneNumberInput = document.getElementById('school_id');
    var trackingNumberInput = document.getElementById('tracking_number');

    if (phoneNumberInput.value.length < phoneNumberInput.maxLength) {
        phoneNumberInput.value += value;
        lastActiveInput = phoneNumberInput;
    } else if (trackingNumberInput.value.length < trackingNumberInput.maxLength) {
        trackingNumberInput.value += value;
        lastActiveInput = trackingNumberInput;
    }
}

function resetForm() {
    document.getElementById('school_id').value = '';
    document.getElementById('tracking_number').value = '';
}

function backspaceForm() {
    var phoneNumberInput = document.getElementById('school_id');
    var trackingNumberInput = document.getElementById('tracking_number');

    if (lastActiveInput != null) {
        var inputValue = lastActiveInput.value;

        if (inputValue && inputValue.length > 0) {
            lastActiveInput.value = inputValue.slice(0, -1);
        } else if (lastActiveInput === trackingNumberInput && inputValue.length === 0) {
            lastActiveInput = phoneNumberInput;
        }
    }
}


document.querySelector('.hamburger-button').addEventListener('click', function () {
    console.log('klik!');
    document.querySelector('.nav-links').style.display =
        (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
});

function updateZegar() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;


    var timeStringPL = "Warszawa | " + hours + ":" + minutes + ":" + seconds;

    if(document.getElementById("clockPL") != null) document.getElementById("clockPL").innerText = timeStringPL

}

function updateClock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours < 10) minutes = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    var timeStringENG = "Warsaw | " + hours + ":" + minutes + ":" + seconds;

    if(document.getElementById("clockENG") != null) document.getElementById("clockENG").innerText = timeStringENG;
}

setInterval(updateClock, 1000);
setInterval(updateZegar, 1000);
