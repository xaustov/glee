$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000
 });
 
  
  
  const mixin1 = document.querySelector(".design-gallery");
  const mixin2 = document.querySelector(".products-items");
  
  if (mixin1) {
    mixitup('.design-gallery', {
      selectors: {
        control: '.filter2'
      }
    })
  }

  if (mixin1) {
    mixitup('.products-items', {
      selectors: {
        control: '.filter1'
      }
    })
  }

  

});