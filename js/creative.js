(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // When the user scrolls down 1000px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            document.getElementById("topBtn").style.display = "block";
            // window.setTimeout(Timefunction,5000);
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }
    function Timefunction(){
        document.getElementById("topBtn").style.display = "none";

        // alert('Hello');
    }
    //妤瑄姊給的
    $(function () {
        $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 500);
         });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#gotop').fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        });
    });

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
})(jQuery); // End of use strict

//點擊二層菜單
 function f(str){ 
        var sub_menu = document.getElementById(str); 
        var dis_v = sub_menu.style.display; 
        if($(window).width() < 767)
        {
            // JavaScript here 
            // 當視窗寬度小於767px時執行
        } else {
            // JavaScript here
            // 當視窗寬度不小於767px時執行
            if(dis_v == "block") 
              sub_menu.style.display = "none"; 
            else 
              sub_menu.style.display = "block"; 
            }  
      } 
