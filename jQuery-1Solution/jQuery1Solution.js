
/*
Q1:
Check if jQuery is loaded
*/
//add this line to HTML
/* <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> */

if (typeof jQuery == 'undefined') {
  console.log('jQuery has not loaded.');
  $("#q1").html('jQuery has not loaded.')
} else {
  console.log('jQuery has loaded');
  $("#q1").html('jQuery has loaded.')
}


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$("a[href='#top'").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
});


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$('button#btn1').click(function () {
  $('#box').animate({
    width: '500px',
    height: '500px'
  }, 1500);
});

$('button#btn2').click(function () {
  $('#box').animate({
    width: '150px',
    height: '150px'
  }, 1500);

});


/*
Q4:
Learn how to fadein your boxes
*/
$('button').click(function () {
  $('#div1').delay(800).fadeIn();
  $('#div2').delay(2400).fadeIn();
  $('#div3').delay(4000).fadeIn();
});


/*
Q5:
User must first accept then he or she can signup
*/
$('#accept').click(function () {
  if ($('#submitbtn').is(':disabled')) {
    $('#submitbtn').removeAttr('disabled');
  } else {
    $('#submitbtn').attr('disabled', 'disabled')
  }
});


/*
Q6:
Let them print
*/
$('a.printPage').click(function () {
  window.print();
});


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
var maxLength = 20;
$('textarea').keyup(function () {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$('p').each(function () {
  var pdata = $(this);
  pdata.html(pdata.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});


/*
Q9:
Add new div to your website
*/
function new_div() {
  $(document).ready(function () {
    var test = {
      id: "div",
      class: "divclass",
      css: {
        "color": "Green"
      }
    };
    var $div = $('<div>', test);
    $div.html("Friday Div");
    $("body").append($div);
  });
}


/*
Q10:
Select values from a JSON object using jQuery
*/
colors = { "color1": "Red", "color2": "Green", "color3": "Blue" }
$.each(colors, function (key, value) {
  $('#divSelect').append($("<p/>", {
    value: key,
    text: value
  }));
});


/*
Q11:
Add element within ul list
*/
$('#btnclick').on('click', function () {
  $("#header ul").append('<li><a href="#">is the best!!!</a></li>');
});


/*
Q12:
Know what user puts into textbox
*/
$('input#usertext').keyup(function () {
  var textvalue = $(this).val();
  console.log(textvalue);
});


/*
Q13:
Change input value
*/
$('input#button').on('click', function () {
  $(this).prop('value', 'Bill Clinton');
});


// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 