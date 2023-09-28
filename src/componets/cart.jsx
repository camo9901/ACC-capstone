import React, { useState, useEffect } from "react";
import Footer from "./footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleCart = async () => {
    try {
      const reponse = await fetch(`https://fakestoreapi.com/carts/1`);
      const result = await reponse.json();

      setCartItems(result);
      handleSingleProduct(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const [cart, setCart] = useState("");
  const handleSingleProduct = async (cartz) => {
    const productsList = cartz.products.map(async (product) => {
      if (product) {
        const response = await fetch(
          `https://fakestoreapi.com/products/${product.productId}`
        );
        const result = await response.json();
        // result.quantity = product.quantity;
        return result;
      } else {
        return null; // Return a placeholder value for items without 'id'
      }
    });
    const productDetail = await Promise.all(productsList);
    setCart(productDetail);
  };

  useEffect(() => {
    handleCart();
  }, [null]);

  return (
    <>
      <div>
        <h1>Cart Items</h1>
        {cartItems.id}

        {cart
          ? cart.map((product) => (
              <div key={product.id}>
                {product.category}
                {product.title}
                {product.price}

                <img src={product.image} alt={product.title} />
              </div>
            ))
          : null}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
