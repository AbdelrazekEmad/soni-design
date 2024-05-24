$(document).ready(function () {
  // Loader
  var loadingOverlay = document.querySelector(".loading-overlay");
  setTimeout(function () {
    loadingOverlay.remove();
  }, 1500);

  //bannar delete
  $(".alert-banner .close__btn").click(function () {
    $(".alert-banner").hide();
  });
});

// Toggle dropdown on click
$(".nav-item.dropdown").each(function () {
  $(this).on("click", function (event) {
    // Close any other open dropdowns
    $(".nav-item.dropdown.active").not(this).find(".dropdown__menu").css("display", "none");
    $(".nav-item.dropdown.active").not(this).removeClass("active");

    // Toggle the clicked dropdown
    var dropdownMenu = $(this).find(".dropdown__menu");
    if (dropdownMenu.css("display") === "none") {
      dropdownMenu.css("display", "block");
    } else {
      dropdownMenu.css("display", "none");
    }
    $(this).toggleClass("active");

    event.stopPropagation(); // Prevent the click event from bubbling up to the document
  });
});

// Remove dropdown if click outside
$(document).on("click", function (event) {
  if (!$(event.target).closest(".nav-item.dropdown").length) {
    $(".nav-item.dropdown.active .dropdown__menu").css("display", "none");
    $(".nav-item.dropdown.active").removeClass("active");
  }
});

$(".offcanvas__list__item").on("click", function () {
  $(this).find(".dropdown__list").slideToggle();
  $(this).toggleClass("active");
});
