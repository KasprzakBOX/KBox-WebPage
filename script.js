function addToInput(value) {
    var phoneNumberInput = document.getElementById('phone_number');
    var trackingNumberInput = document.getElementById('tracking_number');

    if (phoneNumberInput.value.length < phoneNumberInput.maxLength) {
        phoneNumberInput.value += value;
    } else if (trackingNumberInput.value.length < trackingNumberInput.maxLength) {
        trackingNumberInput.value += value;
    }
}

function resetForm() {
    document.getElementById('phone_number').value = '';
    document.getElementById('tracking_number').value = '';
}



document.querySelector('.hamburger-button').addEventListener('click', function () {
    document.querySelector('.nav-links').style.display =
        (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
});



function updateZegar() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var timeStringPL = "Warszawa godzina: " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("clockPL").innerText = timeStringPL

}

function updateClock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var timeStringENG = "Warsaw time: " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("clockENG").innerText = timeStringENG;
}

setInterval(updateClock, 1000);
setInterval(updateZegar, 1000); 
