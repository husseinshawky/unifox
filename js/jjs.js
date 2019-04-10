// This Function For navbar show slide toggle
$(document).ready(function() {
  $(".parse").click(function() {
    $(".nav-list").slideToggle(1000);
  });
  // Nav bar Staicky

  $(window).scroll(function() {
    let scroll = $(this).scrollTop();
    if (scroll > 150) {
      $("header").css({
        background: "black",
        color: "#fff",
        transition: "all .500s ease-in-out"
      });
    } else {
      $("header").css("background", "transparent");
    }if (scroll > 1700){
        $(".timer").countTo();
    }
  });
//   <Count Timer
//   Cusole
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
});
