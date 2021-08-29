$(document).ready(function(){
    // Adding The sticky Class to The Header Sticky Clone
    let $header = $("header");
    let $sticky = $header.before($header.clone()).addClass("sticky");

    // Scroll function to add Our Class
    $(window).on("scroll" , function(){
        let $windowScrolly =  $(window).scrollTop();
        $("body").toggleClass("scroll" , ($windowScrolly > 250));
    });

    // Carousel
    $('#carouselFade').carousel();

    
    // Slick Slider
    $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: false,
    centerMode: true,


        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });
    


    // Menu Active
    let body = $('body');
    let menuTrigger = $('.js-menu-trigger');
    let mainOverlay = $('.js-main-overlay');
    let close = $('.main-overlay').after();

    menuTrigger.on('click', function(){
        body.addClass("menu-active");
    });

    mainOverlay.on('click', function(){
        body.removeClass("menu-active");
    });

    $(".menu li a").on('click', function(){
        body.removeClass("menu-active");
    });

});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}