function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

function changeButton(content, action) {
    var button = document.getElementById("button");
    button.innerHTML = content;
    button.setAttribute("onclick", action);
}

var interval;
var secondsLeft = 10.0;

function intervalAction() {
    secondsLeft = secondsLeft - 0.01
    secondsLeft = round(secondsLeft, 2);
    document.getElementById("countdown").innerHTML = secondsLeft.toString();
}

function start() {
    changeButton("Stop", "buttonPress();");
    interval = setInterval(intervalAction, 10);
}

function buttonPress() {
    clearInterval(interval);
    alert("Time: " + round(secondsLeft, 2).toString());
    document.getElementById("countdown").innerHTML = round(secondsLeft, 2).toString();
    secondsLeft = 10.0;
    document.getElementById("countdown").innerHTML = "10.00";
    changeButton("Start", "start();");
}
