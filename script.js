// ------- header js start -------
function SearchBtnActive() {
    $(".search-btn").click(function () {
        $(".search-input").addClass('active').focus();
    });
}

function TopbarHide() {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= 400) {
            $('.topbar__inner-1').addClass('hide');
            $('.topbar__inner-2').addClass('active');
            $()
        }
        else if (scrollTop == 0) {
            $('.topbar__inner-1').removeClass('hide');
            $('.topbar__inner-2').removeClass('active');
        }
    })
}

function hambergerActive() {
    $('.topbar__inner-2__hamberger').click(function () {
        $('.hambergerbox').addClass('active');

    });

    $('.HBG-close-btn').click(function () {
        $('.hambergerbox').addClass('closed');

        setTimeout(function () {
            $('.hambergerbox').removeClass('active');
            $('.hambergerbox').removeClass('closed');
        }, 600);
    });
}



SearchBtnActive();
TopbarHide();
hambergerActive();

// ------- header js end -------



// ------- banner js start -------
var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: false,
    },
    speed: 1300,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },

    touchRatio: 0.5,
});
// ------- banner js end -------



// ------- main js start -------
AOS.init();


function productMenuActive() {
    $(window).scroll(function () {
        var scrollTop2 = $(window).scrollTop();

        if (scrollTop2 >= 1000) {
            $('.product-menu').addClass('active');
        } else {
            $('.product-menu').removeClass('active');
        }
    });
}

productMenuActive();
// ------- main js end -------


// ------- footer js start -------
// ------- footer js end -------


var scrollTop = $(window).scrollTop();


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    console.log(scrollTop);
});