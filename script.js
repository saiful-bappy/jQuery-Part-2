$(".content").text("Something Else");

var dhorbo = $(".table").text();
$(".fan").html("<h1> " + dhorbo + " </h1>");

$(".fan").css("color", "red").css("background", "yellow");

$("p").css({ color: "orange", background: "lightblue" });

$(".table").addClass("bappy");

$(".content").addClass("another").removeClass("content");

$(".clickFunction .button a").click(function () {
  $(".wallpaper").toggle(1000);
  return false;
});

$(".fadeFunction .button a").click(function () {
  $(".wallpaperFade").fadeToggle(3000);
  return false;
});

$(".slideFunction .button a").click(function () {
  $(".wallpaperSlide").slideToggle(1000);
  return false;
});

$(".dblFunction .button a").click(function () {
  return false;
});

$(".dblFunction .button a").dblclick(function () {
  $(".doubleClick").slideToggle(1000);
});

jQuery(document).ready(function () {
  jQuery(".start").click(function () {
    jQuery(".square-box")
      .animate({ left: "500" }, 1000)
      .animate({ top: "400" }, 500)
      .animate({ left: "0", top: "0" }, 1000);
    return false;
  });

  jQuery(".stop").click(function () {
    jQuery(".square-box").stop(500);
    return false;
  });
});

var boxErHeight = jQuery(".square .box").outerHeight();
var boxErWeight = jQuery(".square .box").outerWidth();

jQuery(".btn").click(function () {
  alert(boxErHeight);
  return false;
});

jQuery(".nameBox").find(".sahabaz").css("color", "orange");
jQuery(".saiful").children(".naim").css("color", "red");
jQuery(".safia").parents(".nameBox").css("color", "blue");

jQuery(".else .two").css({ fontSize: 30, textTransform: "uppercase" });
jQuery(".middle").prevAll(".one").css({ color: "red", fontSize: 30 });
jQuery(".middle").nextAll(".one").css({ color: "red", fontSize: 30 });
jQuery(".middle").siblings(".one").css({ textTransform: "uppercase" });

jQuery(".else .two").first().css({ color: "blue" });
jQuery(".else .two").last().css({ color: "orange" });
jQuery(".else .two").eq(2).css({ color: "gray" });
jQuery(".else .two").filter(".filtering").css({ fontStyle: "italic" });
jQuery(".else .two").not(".filtering").css({ color: "gray" });
