document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

AOS.init();

bulmaCarousel.attach('.hero-carousel', {
    navigationKeys: true,
    loop: true,
    infinite: true,
    autoplay: true
});

var calendars = bulmaCalendar.attach('[type="date"]',{
    color: 'danger',
    isRange: true,
    dateFormat: 'DD/MM/YYYY',
    displayMode: 'dialog',
    cancelLabel: 'Cancelar',
    clearLabel: 'Limpiar',
    todayLabel: 'Hoy',
    nowLabel: 'Ahora',
    validateLabel: 'Validar',
    labelFrom: 'Desde',
    labelTo: 'Hasta'
});
