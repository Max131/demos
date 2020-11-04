

  bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 3,
    pagination: false,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  });

document.querySelectorAll('.lightbox').forEach(function ($el) {
  $el.addEventListener('click', function () {
  var modalTwo = Bulma().modal({
    title: '¡Vive ésta aventura!',
    body: '<figure class="image"><img src="images/'+$el.dataset.img+'"><figcaption><p class="content is-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid obcaecati unde, inventore quod nostrum necessitatibus odit, rerum voluptate, porro quasi id explicabo dolore accusantium suscipit vitae exercitationem neque blanditiis!</p></figcaption></figure>'
  });
  modalTwo.open();
  });
});
