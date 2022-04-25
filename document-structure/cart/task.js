const quantityControls = document.querySelectorAll(
  'div.product__quantity-control'
);
const addButtons = document.querySelectorAll('div.product__add');

quantityControls.forEach((value) => {
  const parentControl = value.closest('div.product__quantity-controls');
  value.onclick = () => {
    const quantityElem = parentControl.querySelector(
      'div.product__quantity-value'
    );
    let quantity = +quantityElem.textContent;
    if (value.classList.contains('product__quantity-control_dec')) {
      if (quantity > 1) {
        quantity -= 1;
      }
    } else {
      quantity += 1;
    }
    quantityElem.textContent = quantity;
  };
});

createProduct = (id, imgSrc, count) => {
  const div = document.createElement('div');
  div.className = 'cart__product';
  div.dataset.id = id;
  div.innerHTML =
    '<img class="cart__product-image" src=""><div class="cart__product-count"></div>';
  div.querySelector('.cart__product-image').src = imgSrc;
  div.querySelector('.cart__product-count').textContent = count;
  return div;
};

addButtons.forEach((button) => {
  button.onclick = () => {
    const product = button.closest('div.product');
    const productDataId = product.dataset.id;
    const productImg = product.querySelector('img.product__image').src;
    const productCount = product.querySelector(
      'div.product__quantity-value'
    ).textContent;

    const cartProducts = document.querySelectorAll('div.cart__product');

    const index = Array.from(cartProducts).findIndex(
      (cartProduct) => cartProduct.dataset.id === productDataId
    );
    if (index != -1) {
      quantity = +cartProducts[index].querySelector('div.cart__product-count')
        .textContent;
      quantity += +productCount;
      cartProducts[index].querySelector('div.cart__product-count').textContent =
        quantity;
    } else {
      document
        .querySelector('div.cart__products')
        .insertAdjacentElement(
          'beforeEnd',
          createProduct(productDataId, productImg, productCount)
        );
    }
  };
});
