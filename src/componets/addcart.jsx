import React, { useState } from "react";

function AddToCartComponent() {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddToCart = () => {
    fetch("https://fakestoreapi.com/carts/7", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Number(userId),
        date,
        products: [
          { productId: Number(productId), quantity: Number(quantity) },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Add to Cart</h1>
      <input
        type="text"
        placeholder="User ID"
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product ID"
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCartComponent;
