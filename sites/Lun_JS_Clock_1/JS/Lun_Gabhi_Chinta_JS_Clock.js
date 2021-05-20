
let template = $('.clock-radii');
let marks = [$('#mark-0')];
let marks_angle = 0;
var i;

for (i = 1; i < 12; i++){
    marks_angle = 30*i;
    marks[i] = $('#mark-0').clone().attr("id", `mark-${(i)}`).css("transform",`rotate(${(marks_angle)}deg)`);
    if (i%3 == 0) {
        marks[i] = $('#mark-0').clone().attr("id", `mark-${(i)}`).css("transform",`rotate(${(marks_angle)}deg)`).addClass('boldmark');
    }
    $(marks[i-1]).after(marks[i]);
}

marks[0].addClass('boldmark');

//---------------------------------------------------------------------------------------------------//

var mouseX;
var mouseY;
var angleXZ=0;
var angleYZ=0;

document.addEventListener("mousemove", (Event) => {
    mouseX = Event.movementX;
    mouseY = Event.movementY;
    angleXZ += 0.03678*mouseX;
    angleYZ -= 0.03678*mouseY;

    $('#clock').css('transform', `translate3d(-25%,-25%,0) rotateY(${(angleXZ)}deg) rotateX(${(angleYZ)}deg)`) ;
})

//---------------------------------------------------------------------------------------------------//

var $hands = $('#clock div.hand');

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 1000/60)}

function updateclock(){
 var timedata = new Date();
 var hours_to_degree = ( timedata.getHours() + timedata.getMinutes()/60 ) / 12 * 360;
 var minutes_to_degree = ( timedata.getMinutes() + timedata.getSeconds()/60) / 60 * 360;
 var seconds_to_degree = ( timedata.getSeconds() + timedata.getMilliseconds()/1000 ) /60 * 360;
 $hands.filter('.hour').css({transform: 'rotate(' + hours_to_degree + 'deg)' });
 $hands.filter('.minute').css({transform: 'rotate(' + minutes_to_degree + 'deg)' });
 $hands.filter('.second').css({transform: 'rotate(' + seconds_to_degree + 'deg)' });
 requestAnimationFrame(updateclock); 
}

requestAnimationFrame(updateclock);

