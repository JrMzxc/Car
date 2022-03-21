$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 350);
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  });





  const heroElem = document.querySelector('#hero');
  const lionElem = document.querySelector('#lion');
  const elephantElem = document.querySelector('#elephant');

  const scrollAmount = -500;
  window.addEventListener('scroll', (event) => {
    const { top } = heroElem.getBoundingClientRect();
    const heroInView = top - window.innerHeight < scrollAmount;
    lionElem.style.opacity = +!heroInView;
    elephantElem.style.opacity = +heroInView;
  });

