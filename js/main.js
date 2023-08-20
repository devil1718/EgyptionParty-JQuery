// ######### Making a spinner on loading the web site #########

$(document).ready(function () {
  $(".sk-cube-grid").fadeTo(2000, 1 , function () {
    $("#loading").fadeOut(2500, function () {
      $("body").css("overflow", "auto");
      $("#loading").remove();
    });
  });
});

// ######### When click on any link on side bar#########

$("li a").click(function () {
  let hrefValue = $(this).attr("href");
  console.log(hrefValue);
  let sectiontop = $(hrefValue).offset().top;
  console.log(sectiontop);
  $("html,body").animate({ scrollTop: sectiontop }, 2800);
});
// ####################### hide side bar when scroll ##################
let sectionHome = $("#Duration").offset().top;
$(window).scroll(function () {
  console.log("hello");
  let topp = $(window).scrollTop();
  if (topp > sectionHome) {
    $(".openSideBar").css({ opacity: "0" });
  } else {
    $(".openSideBar").css({ opacity: "1" });
  }
});

// ######### When open the web site for the first time #########

let sideBarWidth = $("#sideBarContent").innerWidth();
$("#sideBarContent").animate({ left: -sideBarWidth });
$(".openSideBar").animate({ left: "0px" });
$(".paragraf2").slideUp();
$(".paragraf3").slideUp();
$(".paragraf4").slideUp();

//########## when click on the icon of side bar ##################

$(".openSideBar").click(function () {
  if ($("#sideBarContent").css("left") == "0px") {
    $("#sideBarContent").animate({ left: -sideBarWidth }, 600);
    $(".openSideBar").animate({ left: "0px" }, 600);
  } else {
    $("#sideBarContent").animate({ left: "0px" }, 600);
    $(".openSideBar").animate({ left: sideBarWidth }, 600);
  }
});

// ########## when click on the close icon in side bar ##################

$(".closeIcon").click(function () {
  $("#sideBarContent").animate({ left: -sideBarWidth }, 600);
  $(".openSideBar").animate({ left: "0px" }, 600);
});

//  ########## when click on the singer's div h3 in Second section ##################
$(".singer").click(function () {
  $(".paragraf").not($(this)).slideUp(500);
  $(this).next().slideToggle(500);
});

// #####################this or this ###################

// $(".singer1").click(function () {
//   $(".paragraf1").slideToggle(500);
//   $(".paragraf2").slideUp(500);
//   $(".paragraf3").slideUp(500);
//   $(".paragraf4").slideUp(500);
// });
// $(".singer2").click(function () {
//   $(".paragraf2").slideToggle(500);
//   $(".paragraf1").slideUp(500);
//   $(".paragraf3").slideUp(500);
//   $(".paragraf4").slideUp(500);
// });
// $(".singer3").click(function () {
//   $(".paragraf3").slideToggle(500);
//   $(".paragraf1").slideUp(500);
//   $(".paragraf2").slideUp(500);
//   $(".paragraf4").slideUp(500);
// });
// $(".singer4").click(function () {
//   $(".paragraf4").slideToggle(500);
//   $(".paragraf1").slideUp(500);
//   $(".paragraf2").slideUp(500);
//   $(".paragraf3").slideUp(500);
// });

//  ########## Making a timer count down  ##################

// set the date we are counting down to
let countDown = new Date("oct 17, 2023 12:12:50").getTime();

//update the count down in every 1 second
let update = setInterval(function () {
  // get the today's date and time
  let now = new Date().getTime();

  //find the difference b/w countDown and now
  let diff = countDown - now;

  //now we are calculating time in days, hrs, minutes, and seconds.
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  //now output the result in an element with id ="time"
  let cartona = `
   <div class="col-md-3 text-center">
            <div class="time"><span>${-days} D</span></div>
          </div>
          <div class="col-md-3 text-center">
            <div class="time"><span>${hrs} H</span></div>
          </div>
          <div class="col-md-3 text-center">
            <div class="time"><span>${minutes} M</span></div>
          </div>
          <div class="col-md-3 text-center">
            <div class="time"><span>${seconds} S</span></div>
          </div>`;

  document.getElementById("timer").innerHTML = cartona;

  if (diff < 0) {
    clearInterval(update);
    document.getElementById("time").innerHTML = "Expired";
  }
}, 1000);

// ################# Making a countDown of letters in the text area #############

let maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var length2 = maxLength - length;
  $("#chars").text(length2);
});
