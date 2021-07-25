$(function(){

  $('.menu__btn').on('click', function (){
    $('.menu__list').toggleClass('menu__list--active')
  });
  

  $('.product-tabs__link').on('click', function (e){
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });
  
  
  
  
  $('.related__slider').slick({
    slidesToShow: 4,
    // appendArrows: $('.related__slider-btn--left, .related__slider-btn--right'),
    prevArrow: $('.related__slider-btn--left'),
    nextArrow: $('.related__slider-btn--right')
  });
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000
  });
  
  $('.details__thumbs').slick({
    asNavFor: '.details__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.details__big').slick({
    asNavFor: '.details__thumbs',
    draggable: false,
    arrows: false,
    fade: true
  });


  $('.details__form-input').styler();
  
  $('.shop-list__filter-btn').on('click', function () {
    $('.shop-list__filter-btn').removeClass('shop-list__filter-btn--active');
    $(this).addClass('shop-list__filter-btn--active');
  });
  
  $('.btn-list').on('click', function () {
    $('.shop-list__item').addClass('shop-list__item--list');
  });
  $('.btn-grid').on('click', function() {
    $('.shop-list__item').removeClass('shop-list__item--list');
  });

 
  $('.btn-list').on('click', function (){
    $('.pagination').addClass('pagination--list');
  });
  $('.btn-grid').on('click', function (){
    $('.pagination').removeClass('pagination--list');
  });
  
  
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    min: 1.00,
    max: 999.99,
    from: 100.00,
    to: 500.00,
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  
  $(".star").rateYo({
    spacing: "8px",
    starWidth: "11px",
    readOnly: true,
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6"
  });

  $('.shop-list__star').rateYo({
    rating: 4,
    spacing: "10px",
    readOnly: true,
    starWidth: "18px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6"
  });

  $('.details__star-rating').rateYo({
    rating: 4,
    readOnly: true,
    starWidth: "15px",
    spacing: "10px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6"
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