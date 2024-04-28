
$(document).ready(function(){
    $('#testimonial-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        infinite: true
    });

    $('#prev-btn').click(function(){
        $('#testimonial-carousel').slick('slickPrev');
    });

    $('#next-btn').click(function(){
        $('#testimonial-carousel').slick('slickNext');
    });
});
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        infinite: true
    });

    $('.prev-btn').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.next-btn').click(function () {
        $('.slider').slick('slickNext');
    });
});
