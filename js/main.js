$(document).ready(function(){
  
  if ($(window).width() > 800) {

    checkScroll();

    $(window).scroll(function(){
       checkScroll();
    });

    function checkScroll(){
      var scrollPos = $(document).scrollTop();
      console.log(scrollPos);
      if(scrollPos < 500) {
        $(".above-fold .header").css("padding-top", scrollPos+30+"px")
        $(".hero").css("opacity", (400-scrollPos)/400)
      } else {
        $(".above-fold .header").css("padding-top", "530px")
        $(".hero").css("opacity", 0)
      }
    }
  }
});