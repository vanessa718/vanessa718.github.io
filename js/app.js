var timer = false;
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2018 17:00:00").getTime();

$('.btnStart').on('click', function(){
            timer=true;
});
$('.btnPause').on('click', function(){
        timer=false;
});
$('.btnEnd').on('click', function(){
        timer=false;
});
$('.btnReset').on('click', function(){
        timer=false;
});

// Update the count down every 1 second
var x = setInterval(function() {  // Get todays date and time
    if (timer==true){
      var now = new Date().getTime();  // Find the distance between now an the count down date
      var distance = countDownDate - now;  // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Display the result in the element with id="demo"
      //document.getElementById("countdown").innerHTML = days + " " + hours + " "
      //+ minutes + " " + seconds + " ";
      // If the count down is finished, write some text 
      $('#days').html(days);
      $('#hours').html(hours);
      $('#minutes').html(minutes);
      $('#seconds').html(seconds);
    }
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Recommencer";
     }
}, 1000); 
