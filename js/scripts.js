/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
   document.getElementsByClassName("col-md-4");

   var myCircle = document.getElementsByClassName("col-md-4");
   myCircle.addEventListener("click", moveUpDown);

   function moveUpDown(e) {
    var myCircle = e.target;
    var top = 0;
  
    var circle1 = setInterval(frame, 10) // draw every 10ms
  
    function frame() {
      myCircle.style.top = top + '%';    
      top++;
      if (top === 20){
        clearInterval(className);
      }
    }
    
  }
   
    (function ($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
   
    
})(jQuery); // End of use strict


