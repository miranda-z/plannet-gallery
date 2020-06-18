import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';

window.$ = $;
window.jQuery = $;

$(document).ready(
    function () {
        $('.slide').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            adaptiveHeight: true,
            centerMode: true,
        });
    }
);
