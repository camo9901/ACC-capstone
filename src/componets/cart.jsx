import React, { useState, useEffect } from "react";
import Footer from "./footer";
import "../style/cart.css";

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
      <div className="container">
        <div className="container_cart">
          <div className="cart_tittle">
            <h1>Cart</h1>
          </div>

          {cart
            ? cart.map((product) => (
                <div
                  key={product.id}
                  style={{ display: "flex", marginBottom: "20px" }}
                >
                  <div className="image_cart">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product_details">
                    <div className="title_product_title">{product.title}</div>
                    <div className="category_cart">{product.category}</div>
                    <div className="category_price">${product.price}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
