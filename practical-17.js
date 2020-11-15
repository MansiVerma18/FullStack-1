const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");
const div = document.getElementById("bg");

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);


function showTime() {
    let today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds(),
        Todaydate = today.toDateString();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    time.innerHTML = `${addZero(hours)} <span>:</span> ${addZero(minutes)} <span>:</span> ${addZero(seconds)} ${ampm}`;
    date.innerHTML = Todaydate;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function greetings() {
    var bg = document.getElementById("bg");
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = 'url("wind.png")';
        greeting.innerHTML = "Good Morning";
    } else if (hour >= 12 && hour < 16) {
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = 'url("waranont-joe-7K78zXYNFoM-unsplash.jpg")';
    } else if (hour >= 16 && hour < 20) {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = 'url("stanislav-ferrao-AdzthdZfOAs-unsplash.jpg")';
    } else if (hour >= 20 && hour <= 24) {
        greeting.innerHTML = "Good Night";
        document.body.style.backgroundImage = 'url("pierpaolo-lanfrancotti-NKUEACkOhbk-unsplash.jpg")';
    }
}

function getName() {
    if (localStorage.getItem('myName') == null) {
        name.innerHTML = "[Enter Name]"; //when local storage not made
    } else {
        name.innerHTML = localStorage.getItem('myName');

    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myName', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('myName', e.target.innerHTML);
    }
}

showTime();
greetings();
getName();