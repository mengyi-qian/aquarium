

$(document).ready(function(){

$('#text-1').hide();
$('#text-2').hide();
$('#text-3').hide();
$('#photo-1').hide();
$('#photo-2').hide();
$('#photo-3').hide();

$('.person-1').click(function(){
  $('#text-1').show();
});

$('.close').click(function(){
  $('#text-1').hide();
});

$('.person-2').click(function(){
  $('#text-2').show();
});

$('.close').click(function(){
  $('#text-2').hide();
});

$('.person-3').click(function(){
  $('#text-3').show();
});

$('.close').click(function(){
  $('#text-3').hide();
});




$('#memory-1').click(function(){
  $('#photo-1').show();
});

$('.close').click(function(){
  $('#photo-1').hide();
});

$('#memory-2').click(function(){
  $('#photo-2').show();
});

$('.close').click(function(){
  $('#photo-2').hide();
});

$('#memory-3').click(function(){
  $('#photo-3').show();
});

$('.close').click(function(){
  $('#photo-3').hide();
});








});
