import EventEmitter from "./EventEmitter";

let cartProducts = [];

// load cart products
if (localStorage.getItem("cart")) {
  cartProducts = JSON.parse(localStorage.getItem("cart"));
}

// save cart in local storage (helper function)
const save = () => {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

const isExistsInCart = (productId) => {
  const product = cartProducts.find(item => item._id === productId);
  return product != null;
}

const getProducts = () => {
  return cartProducts;
}

const addProduct = (product) => {
  const existsInCart = isExistsInCart(product._id);

  if (existsInCart) {
    const productInCart = cartProducts.find(item => item._id === product._id);
    productInCart.countInCart += 1;
  } else {
    product.countInCart = 1;
    cartProducts.push(product);
  }

  // dispatch
  EventEmitter.dispatch('cart-changed',cartProducts);

  save();
}

const removeProduct = (productId) => {
  const productIndex = cartProducts.findIndex(item => item._id === productId);
  if (productIndex === -1) {
    return false;
  }

  cartProducts.splice(productIndex, 1);

  // dispatch
  EventEmitter.dispatch('cart-changed',cartProducts);

  save();
  return true;
}

const getProductCount = () => {
  return cartProducts.reduce((total, item) => total + item.countInCart, 0);
}

const getTotalPrice = () => {
  let total = 0;
    cartProducts.forEach((item) => {
      total += item.countInCart * parseFloat(item.price);
  });
  return total;
}

const clearCart = () => {
  localStorage.removeItem("cart");
  cartProducts = [];

  // dispatch
  EventEmitter.dispatch('cart-changed', cartProducts);
}

export default {
  isExistsInCart,
  getProducts,
  addProduct,
  removeProduct,
  getProductCount,
  getTotalPrice,
  clearCart
}