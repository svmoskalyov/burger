const burger = document.querySelector('.burger');
const header = document.querySelector('.page-header');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.nav__link');
const logo = document.querySelector('.page-header__logo');

if (nav && burger) {
  burger.addEventListener('click', () => {
    header.classList.toggle('active');
    body.classList.toggle('lock');
  });

  //   nav.addEventListener("click", (e) => {
  //     if (e.target.classList.contains("nav")) {
  //       header.classList.remove("active");
  //       body.classList.remove("lock");
  //     }
  //   });

  link.forEach(e => {
    e.addEventListener('click', () => {
      header.classList.remove('active');
      body.classList.remove('lock');
    });
  });
}
