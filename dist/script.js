// menambahkan kelas navbar-fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
// menambahkan kelas active pada tombol hamburger
const hamburger = document.querySelector('#hamburger');
const hidden = document.querySelector('#nav-menu');
const tes = document.querySelector('#tutu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  hidden.classList.toggle('hidden');
  tes.classList.toggle('soci');
});
tes.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  hidden.classList.toggle('hidden');
  tes.classList.toggle('soci');
});
