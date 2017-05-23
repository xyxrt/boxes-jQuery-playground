//EXERCISE 1:
//$(function() {
$(document).ready(function() {
  //  alert('Ready for code');

  // //EXERCISE 2:
  // //Question 1
  // var secret = $(document).find('#secretBox');
  // secret.css('background-color', 'white').html('<h1>Secret box</h1>');
  //
  //   //Question 2
  //   var row1 = $("#row1").children();
  //   row1.each(function() {
  //     $(this).toggleClass('boxType3');
  //   });
  //
  //   //Question 3
  //   $("#row4").children().last().hide();
  //
  //   //Question 4
  //   $(".boxType1").css('background-color', "white");
  //
  //   //Question 5
  //   var row2 = $("#row2").children();
  //   row2.slice(0, 2).removeAttr('class');
  //
  // //Question 6
  //   //$("div:not([class=row], [id=secret-box])").css("width", "2px");
  //
  //   //Exercise 3
  //   //Question 1
  //   $("#container").click(function() {
  //     console.log("event pageX: " + event.pageX + "\nevent PageY: " + event.pageY);
  //   })
  //
  //   //Question 2
  //   var redBox = $(".boxType1");
  //   redBox.each(function() {
  //     $(this).html('<a href="http://www.galvanize.com">Galvanize</a');
  //   })
  //   redBox.click(function() {
  //     alert("You cannot leave this page");
  //     event.preventDefault();
  //   });
  //
  //
  //
  //   //Question 3
  //   var boxes = $(".box");
  //   var bool = true;
  //   boxes.click(function() {
  //     if (bool) {
  //       $(this).css("background-image", "url(http://www.rollingmeadowspuppies.com/sitebuilder/images/Bichon_Poodle_Puppy-121x121.jpg");
  //       bool = false;
  //     } else {
  //       $(this).css('background-image', 'none');
  //       bool = true;
  //     };
  //   });
  //
  //
  //Question 4
  var page = $(document).click(function(e) {
    //console.log(e.target.attributes);
    var clickedItem = e.target;
    if (clickedItem.id === "container") {
      $(clickedItem).css("background-color", "limegreen");
      //console.log(e.target.id);
    } else if (clickedItem.style.parent === null) {} else {

      $(clickedItem).css("background-color", "white");
      $(clickedItem).parent().parent().css('background-color', 'black');

    }
  });
});
