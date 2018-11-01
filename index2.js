var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var place = document.getElementById("demo");
var center = document.getElementById("center")

function typeWriter() {

    if (i < txt.length) {
        place.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(function (){
    center.innerHTML = "?"
    setTimeout(function () {
        center.innerHTML = "Press something.."

    },3000);
},5000);


document.addEventListener('keypress', function () {


});

