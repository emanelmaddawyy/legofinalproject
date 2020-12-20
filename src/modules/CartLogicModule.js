export default class CartLogicModule {
    constructor() {
      
    }
  
    isAddedBefore(products, product) {
        const isFounded = products.find((p) => {
          return p.ID === product.ID;
        })
        if (!isFounded) {
          return false;
        } else {
          isFounded.numberOfProduct += 1;
          return true;
        }
      }
      addProductToCart = (product) => {
        const is = this.isAddedBefore(this.state.products, product);
        let newSetOfProducts;
        if (is) {
          newSetOfProducts = [...this.state.products];
        } else {
          newSetOfProducts = [...this.state.products, product];
        }
        this.state.productsNumber += 1;
        this.setState({
          products: newSetOfProducts,
          productsNumber: this.state.productsNumber
        })
        localStorage.setItem("products", JSON.stringify(newSetOfProducts));
      }
      deleteProductFromCart = (deletedProduct) => {
        const newSetOfProducts = this.state.products.filter(product =>{
          return product.ID !== deletedProduct.ID;
        });
    
        localStorage.setItem("products", JSON.stringify(newSetOfProducts));
    
        this.state.productsNumber -= deletedProduct.numberOfProduct;
        this.setState({
          products: newSetOfProducts,
          productsNumber: this.state.productsNumber
        })
      }

  }
  
  