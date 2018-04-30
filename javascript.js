
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#countdown');
    
    startTimer(fiveMinutes, display);
};
var groen = 0, rood = 0;

$(this).on('keypress', function (event) {
    if (event.keyCode == 82) {
      //  alert('Rood gedrukt!')
      rood++;
      document.getElementById("teller2").innerHTML = rood;
    }
    if (event.keyCode == 71) {
      //  alert('Groen gedrukt!') 
      groen++;      
      document.getElementById("teller1").innerHTML = groen;
    }
})

/*$(this).on('keypress', function(event) {
    if (event.keyCode == 82) {
        alert('Rood gedrukt!')
        groen++;
        tellerGroen.textContent = groen;
    }
    if (event.keyCode == 71) {
        //alert('Groen gedrukt!')
        rood++;
        tellerRood.textContent = rood;
    }
})*/
