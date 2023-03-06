function closeMenu() {
  document.querySelector('.mobile-nav-menu').style.display = 'none';
  document.body.style.overflow = 'scroll';
}

closeMenu();

const union = document.querySelector('#union');
union.addEventListener('click', () => {
  document.querySelector('.mobile-nav-menu').style.display = 'block';
  document.body.style.overflow = 'hidden';
});
