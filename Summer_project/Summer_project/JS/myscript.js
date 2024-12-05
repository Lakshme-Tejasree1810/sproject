$(window).on('load', function(){
    $('#preloader_status').fadeOut();
    $('preloader').delay(360).fadeOut('slow');
});

$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>','<span><i class="fas fa-angle-right"></i></span>']
    });
});

$(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        },1000);
    });
        this.destroy();
    },{
        offset: 'bottom-in-view'
    });
});
$(function(){
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});
$(window).on('load', function(){
    var $grid = $('.grid').isotope({  });
$('.portfolio-buttons').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
    $('.portfolio-buttons').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});
$(function(){
    $('.portfolio-item').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
        enabled: true
    }
  });
})
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>','<span><i class="fas fa-angle-right"></i></span>']
    });
});
$(function(){
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});
$(document).ready(function(){
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>','<span><i class="fas fa-angle-right"></i></span>']
    });
});
$(function(){
    ShowHideWhiteNav();
    ShowHidebtn();
    $(window).scroll(function(){
        ShowHideWhiteNav();
        ShowHidebtn();
    });
    function ShowHideWhiteNav(){
        if($(window).scrollTop() > 900){
            $("nav").addClass("white-nav-top");
        }
        else{
            $("nav").removeClass("white-nav-top");
        }
    }
    function ShowHidebtn(){
        if($(window).scrollTop() > 100){
            $("#back-to-top").fadeIn();
        }
        else{
            $("#back-to-top").fadeOut();
        }
    }
});
$(function(){
    $("a.smooth-scroll").click(function(){
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 75
        },1000,"easeInOutExpo");
    });
});










