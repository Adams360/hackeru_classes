window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 2,
        centeredSlides: true,
        setWrapperSize: true,
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 200,
          snapOnRelease: false,
          draggable: true,
        },
        breakpoints: {

          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }
      })

      var mobileGallery = new Swiper ('.mobile-gallery', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      
      })
      
};


