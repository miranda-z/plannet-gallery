import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';

window.$ = $;
window.jQuery = $;

$(document).ready(
    function () {
        if ($('div').hasClass('slide')) {
            $('.slide').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ],
            });
        }
        $(navbar).fadeIn('slow', function () {
            $('.content').fadeIn('slow');
        });
    }
);
