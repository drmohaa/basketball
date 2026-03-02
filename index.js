let homeCounter = 0
let guestCounter = 0

function pl1Home() {
    homeCounter += 1
    document.getElementById("home-counter").textContent = homeCounter
}

function pl2Home() {
    homeCounter += 2
    document.getElementById("home-counter").textContent = homeCounter
}

function pl3Home() {
    homeCounter += 3
    document.getElementById("home-counter").textContent = homeCounter
}

function pl1Guest() {
    guestCounter += 1
    document.getElementById("guest-counter").textContent = guestCounter
}

function pl2Guest() {
    guestCounter += 2
    document.getElementById("guest-counter").textContent = guestCounter
}

function pl3Guest() {
    guestCounter += 3
    document.getElementById("guest-counter").textContent = guestCounter
}
function reset() {
    homeCounter = 0
    guestCounter = 0
    document.getElementById("home-counter").textContent = homeCounter
    document.getElementById("guest-counter").textContent = guestCounter
}