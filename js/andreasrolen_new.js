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
    $(".menu .item").toggleClass("visible");
})

var waypointInfo = $('#about_me').waypoint({
  handler: function(direction) {
  	$('#about_me').find('h2.title').toggleClass('visible')
    $('#about_me').find('div.left').toggleClass('visible');
    $('#about_me').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointInfo = $('#what-i-do').waypoint({
  handler: function(direction) {
  	$('#what-i-do').find('h2.title').toggleClass('visible')
    $('#what-i-do').find('p.intro').toggleClass('visible');
},
offset: '60%'
})

var waypointVnu = $('#footballaddicts').waypoint({
  handler: function(direction) {
    $('#footballaddicts').find('img.logo').toggleClass('visible');
    $('#footballaddicts').find('div.left').toggleClass('visible');
    $('#footballaddicts').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointVnu = $('#vnu').waypoint({
  handler: function(direction) {
    $('#vnu').find('img.logo').toggleClass('visible');
    $('#vnu').find('div.left').toggleClass('visible');
    $('#vnu').find('div.right').toggleClass('visible');
},
offset: '60%'
})


var waypointNorwegian = $('#norwegian').waypoint({
  handler: function(direction) {
  	$('#norwegian').find('img.logo').toggleClass('visible');
    $('#norwegian').find('div.left').toggleClass('visible');
    $('#norwegian').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointGbgtechweek = $('#gbgtechweek').waypoint({
  handler: function(direction) {
  	$('#gbgtechweek').find('img.logo').toggleClass('visible');
    $('#gbgtechweek').find('div.left').toggleClass('visible');
    $('#gbgtechweek').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointStartuphack = $('#startuphack').waypoint({
  handler: function(direction) {
  	$('#startuphack').find('img.logo').toggleClass('visible');
    $('#startuphack').find('div.left').toggleClass('visible');
    $('#startuphack').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointSvecup = $('#svecup').waypoint({
  handler: function(direction) {
  	$('#svecup').find('img.logo').toggleClass('visible');
    $('#svecup').find('div.left').toggleClass('visible');
    $('#svecup').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointStudies = $('#studies').waypoint({
  handler: function(direction) {
    $('#studies').find('div.left').toggleClass('visible');
    $('#studies').find('div.right').toggleClass('visible');
},
offset: '60%'
})

var waypointContact = $('#contact').waypoint({
  handler: function(direction) {
    $('#contact').find('h2').toggleClass('visible');
    $('#contact').find('h4').toggleClass('visible');
    $('#contact').find('h3').toggleClass('visible');
},
offset: '90%'
})