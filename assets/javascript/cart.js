// menu cart

const cart_shopping = document.getElementById('cart-shopping');
const btn_cart = document.getElementById('btn-cart');
const btn_cart2 = document.getElementById('btn-cart2');

btn_cart.addEventListener('click', toshow =>  {
  cart_shopping.style.right = '5px';
  btn_cart2.style.display = 'flex';
  btn_cart.style.display = 'none';
});

btn_cart2.addEventListener('click', disguise => {
  cart_shopping.style.right = '-100%';
  btn_cart2.style.display = 'none';
  btn_cart.style.display = 'flex';
});

// cart mobile

const cart_shopping_mobile = document.getElementById('cart-shopping-mobile');
const btn_cart_mobile = document.getElementById('btn-cart-mobile');
const btn_cart2_mobile = document.getElementById('btn-cart2-mobile');

btn_cart_mobile.addEventListener('click', toshow2 =>  {
  cart_shopping_mobile.style.left = '0';
  btn_cart2_mobile.style.display = 'flex';
  btn_cart_mobile.style.display = 'none';
  navbar.style.right = '100%';
  menu_x.style.display = 'none';
  menu.style.display = 'flex';
});

btn_cart2_mobile.addEventListener('click', disguise2 => {
  cart_shopping_mobile.style.left = '100%';
  btn_cart2_mobile.style.display = 'none';
  btn_cart_mobile.style.display = 'flex';
});