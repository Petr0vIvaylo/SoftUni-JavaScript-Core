function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function () {
        let days = document.getElementById('days').value;
        let hours = document.getElementById('hours').value = Number(days) * 24;
        let minutes = document.getElementById('minutes').value = hours * 60;
        let seconds = document.getElementById('seconds').value = minutes * 60;
    })

    hoursBtn.addEventListener('click', function () {
        let hours = document.getElementById('hours').value;
        let days = document.getElementById('days').value = Number(hours) / 24;
        let minutes = document.getElementById('minutes').value = hours * 60;
        let seconds = document.getElementById('seconds').value = minutes * 60;
    })

    minutesBtn.addEventListener('click', function () {
        let minutes = document.getElementById('minutes').value;
        let hours = document.getElementById('hours').value = Number(minutes) / 60;
        let days = document.getElementById('days').value = hours / 24;
        let seconds = document.getElementById('seconds').value = minutes * 60;
    })

    secondsBtn.addEventListener('click', function () {
        let seconds = document.getElementById('seconds').value
        let minutes = document.getElementById('minutes').value = Number(seconds) / 60;
        let hours = document.getElementById('hours').value = minutes / 60;
        let days = document.getElementById('days').value = hours / 24;

    })

}