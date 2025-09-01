export function initHeroSlider() {
    return new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
    });
}

export function initFeaturedSlider() {
    return new Swiper('.featured-slider', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 16,
            },
            768: {
                spaceBetween: 20,
            },
            1280: {
                spaceBetween: 24,
            },
        },
    });
}
