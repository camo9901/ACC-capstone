import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/productdetails.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Footer from "./footer";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; //add loading animatin here
  }

  return (
    <>
      <div className="results">
        <a href="/">
          <button>
            <svg
              fill="#000000"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              id="left"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line"
            >
              <g id="SVGRepo_iconCarrier">
                <polyline
                  id="primary"
                  points="10 19 3 12 10 5"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                  }}
                ></polyline>
                <line
                  id="primary-2"
                  data-name="primary"
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                  }}
                ></line>
              </g>
            </svg>
            back to results
          </button>
        </a>
      </div>
      <div className="details_container">
        <div className="details_img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details_content">
          <div className="details_tittle">
            <h2>{product.title}</h2>
          </div>
          <div className="details_price">
            <strong> Price: ${product.price} /ea</strong>
          </div>
          <div className="details_description">
            <p>{product.description}</p>
          </div>
          <div className="details_cart">
            <button className="add_cart_details">Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
