import EventEmitter from "./EventEmitter";

let wishListProducts = [];

// load wishlist products
if (localStorage.getItem("wishlist")) {
  wishListProducts = JSON.parse(localStorage.getItem("wishlist"));
}

// save cart in local storage (helper function)
const save = () => {
  localStorage.setItem("wishlist", JSON.stringify(wishListProducts));
}

const isExistsInWishList = (productId) => {
  const product = wishListProducts.find(item => item._id === productId);
  return product != null;
}

const getProducts = () => {
  return wishListProducts;
}

const addProduct = (product) => {
  const existsInWishList = isExistsInWishList(product._id);

  if (!existsInWishList) {
    wishListProducts.push(product);

    // dispatch
    EventEmitter.dispatch('wishlist-changed', wishListProducts);
    EventEmitter.dispatch('wishlist-product-added', product._id);
  }

  save();
}

const removeProduct = (productId) => {
  const productIndex = wishListProducts.findIndex(item => item._id === productId);
  if (productIndex === -1) {
    return false;
  }

  wishListProducts.splice(productIndex, 1);

  // dispatch
  EventEmitter.dispatch('wishlist-changed', wishListProducts);
  EventEmitter.dispatch('wishlist-product-removed', productId);
  
  save();
  return true;
}

const getProductCount = () => {
  return wishListProducts.length;
}

export default {
  isExistsInWishList,
  getProducts,
  addProduct,
  removeProduct,
  getProductCount
}