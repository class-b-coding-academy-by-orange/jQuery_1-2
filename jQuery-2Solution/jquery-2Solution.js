// SOLUTIONS GO BELOW EACH EXERCISE

// EXERCISE 1: Change Background

// Change the background color of '#target' by script. 
// Hint: you can use .css

// $(document).ready(function () {
//   $("#target").css({ "background-color": "red" });
// });

// EXERCISE 2: Change Parent

// Change the text in the span, a child of "#target"
// Hint: you can use .text

// $(document).ready(function () {
//   $("div#target span").text("newtext");
// });


// EXERCISE 3: Create Clone

// Create a clone of the span in "#target" and position it under the origin.
// Hint: you can use .clone and .insertAfter

$(document).ready(function () {
  $("div#target span").clone().insertAfter("div#target span");
});

// EXERCISE 4: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css

// $(document).ready(function () {
//   $(".target").eq(1).css({ "background-color": "green" });
// });

// EXERCISE 5: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr
// $(document).ready(function () {
//   $('div.target button').css({ "font-size": "2em" }).attr("disabled", true);
// });

// EXERCISE 6: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr

// $(document).ready(function () {
//   $("input").removeAttr("checked");
// });

// EXERCISE 7: Change Parent

// Move "#child" from "#parent1" to "#parent2"
// Hint: you can use .appendTo

// $(document).ready(function () {
//   $("#child").appendTo("#parent2")
// });

// EXERCISE 8: Select A Option in A Select Box

// Select the second option in the selectbox by script
// Hint: you will have to select the option and can use .eq and .attr

// $(document).ready(function () {
//   $("#target option").eq(1).attr("selected", "selected");
// });

// EXERCISE 9: Change Size
// Make "#target" double size
// Hint: you can use .css, .width and .height

// $(document).ready(function () {
//   $('#target').css({ "font-size": "2em" }).width("200px").height("100px");
// })


// EXERCISE 10: Empty Elements
// Hint: you can use .empty

// Remove all children and text of "#target"

// $(document).ready(function () {
//   $("#target").empty();
// })

// Advanced part
// EXERCISE 11: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use .setTimeout and alert

// $(document).ready(function () {
//   setTimeout('alert(\'Surprise!\')', 5000);
// })

// EXERCISE 12: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5

// $(document).ready(function () {
//   var numChildren = $("#target").children().length;
//   alert(numChildren);
// })

// EXERCISE 13: Animate

// Make "#target" double size with animation
// Hint: you can use .animate, .width, and .height

// $(document).ready(function () {
//   $('#target').animate({
//     width: "300px",
//     height: "300px"
//   }, 5000);
// });


// EXERCISE 14: Alternate Color

// Make the list-box alternating. (Make odd options a different color)
// Hint: you can select the option and use .filter and .css

// $(document).ready(function () {
//   $("#target select option").filter(":even").css({ "background-color": "yellow" });
// })

// EXERCISE 15: All But One

// Remove all children of "#target" but h2
// Hint: you can use .children, .not and .remove

// $(document).ready(function () {
//   $("#target").children().not("h2").remove();
// })

// EXERCISE 16: Without Children

// Remove all 'div' whitch has no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not

// $(document).ready(function () {
//   $("div span").parent().remove();
// })
