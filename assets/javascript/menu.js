// responsive menu

const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
const menu_x = document.getElementById('menu-x');

menu.addEventListener('click', toshow =>  {
  navbar.style.right = '0';
  menu_x.style.display = 'flex';
  menu.style.display = 'none';
  cart_shopping_mobile.style.left = '100%';
  btn_cart2_mobile.style.display = 'none';
  btn_cart_mobile.style.display = 'flex';
});

menu_x.addEventListener('click', disguise => {
  navbar.style.right = '100%';
  menu_x.style.display = 'none';
  menu.style.display = 'flex';
});