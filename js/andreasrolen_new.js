var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
    return false;
});

$(document).ready(function() {
	var width = window.innerWidth;
    $("header .title").toggleClass("visible");
    $("header .menu .item").toggleClass("visible");
})

var waypointInfo = $('#about_me').waypoint({
  handler: function(direction) {
  	$('#about_me .title').toggleClass('visible')
    $('#about_me .left').toggleClass('visible');
    $('#about_me .right').toggleClass('visible');
},
offset: '50%'
})

var waypointInfo = $('#what-i-do').waypoint({
  handler: function(direction) {
  	$('#what-i-do .title').toggleClass('visible')
    $('#what-i-do .intro').toggleClass('visible');
},
offset: '50%'
})

var waypointNorwegian = $('#norwegian').waypoint({
  handler: function(direction) {
  	$('#norwegian .logo').toggleClass('visible');
    $('#norwegian .left').toggleClass('visible');
    $('#norwegian .right').toggleClass('visible');
},
offset: '50%'
})

var waypointGbgtechweek = $('#gbgtechweek').waypoint({
  handler: function(direction) {
  	$('#gbgtechweek .logo').toggleClass('visible');
    $('#gbgtechweek .left').toggleClass('visible');
    $('#gbgtechweek .right').toggleClass('visible');
},
offset: '50%'
})

var waypointStartuphack = $('#startuphack').waypoint({
  handler: function(direction) {
  	$('#startuphack .logo').toggleClass('visible');
    $('#startuphack .left').toggleClass('visible');
    $('#startuphack .right').toggleClass('visible');
},
offset: '50%'
})

var waypointSvecup = $('#svecup').waypoint({
  handler: function(direction) {
  	$('#svecup .logo').toggleClass('visible');
    $('#svecup .left').toggleClass('visible');
    $('#svecup .right').toggleClass('visible');
},
offset: '50%'
})

var waypointStudies = $('#studies').waypoint({
  handler: function(direction) {
    $('#studies .left').toggleClass('visible');
    $('#studies .right').toggleClass('visible');
},
offset: '50%'
})

var waypointContact = $('#contact').waypoint({
  handler: function(direction) {
    $('#contact h4').toggleClass('visible');
    $('#contact h3').toggleClass('visible');
},
offset: '90%'
})