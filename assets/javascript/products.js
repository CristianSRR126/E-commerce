// container products

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 59900,
    price_before: 89900,
    image: 'assets/img/product-1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39900,
    price_before: 49900,
    image: 'assets/img/product-2.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19900,
    price_before: 39900,
    image: 'assets/img/product-3.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 99000,
    price_before: 129900,
    image: 'assets/img/product-4.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 69900,
    price_before: 89900,
    image: 'assets/img/product-5.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 109900,
    price_before: 159900,
    image: 'assets/img/product-6.jpg',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 29900,
    price_before: 49900,
    image: 'assets/img/product-7.jpg',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 119900,
    price_before: 189900,
    image: 'assets/img/product-8.jpg',
  }
];

const container_products = document.getElementById('container-products');

let productsHTML = '';

for (let product of products) {
  productsHTML += `
    <div class="product">
      <div class="product_img">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product_info">
        <h4>${product.name}</h4>
        <span>$ ${product.price} <del>$ ${product.price_before}</del></span>
        <button class="product_btn" data-id="${product.id}">
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  `
}

container_products.insertAdjacentHTML('beforeend', productsHTML);

let cart = [];

function find(id) {
  for (let product of products) {
    if (product.id === id) {
      return product;
    }
  }
}

function addToCart(id) {
  const product = find(id);
  cart.push(product);
}

container_products.addEventListener('click', (e) => {
  if (e.target.closest('.product_btn')) {
    const id = e.target.closest('.product_btn').dataset.id
    addToCart(+id);
    renderCart();
  }
});

const cartShopping = document.getElementById('cart-shopping2');

function renderCart() {
  let cartHTML = '';

  for (let product of cart) {
    cartHTML += `
    <div class="product_cart">
      <div class="cart_img">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="cart_info">
        <h4>${product.name}</h4>
        <span>$${product.price} <del>$${product.price_before}</del></span>
        <button class="cart_btn_x" data-id="${product.id}">
          <i class='bx bx-x'></i>
        </button>
      </div>
    </div>
    `
  }

  const cartTotal = document.getElementById('cart-total');

  cartShopping.innerHTML = cartHTML.length > 0 ? cartHTML : '<p>empty cart</p>'
  cartTotal.innerHTML = `$ ${sumTotal()}`
}

renderCart();

function sumTotal() {
  let suma = 0;
  for (let product of cart) {
    suma += product.price;
  }
  return suma;
}

function removeFromCart (id) {
  let newArr = [];
  for (let product of cart) {
    if(product.id !== id) {
      newArr.push(product);
    }
  }
  cart = newArr;
}

cartShopping.addEventListener('click', (e) => {
  if (e.target.closest('.cart_btn_x')) {
    const id = e.target.closest('.cart_btn_x').dataset.id
    removeFromCart(+id);
    renderCart();
  }
});

const checkout = document.getElementById('checkout');

checkout.addEventListener('click', (e) => {
  if(e.target.closest('.cart_btn_link')) {
    alert('Thanks for your purchase');
    cart = [];
    renderCart();
  }
});