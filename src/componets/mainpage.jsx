import React, { useState, useEffect } from "react";
import Carousel from "./carousel";
import { offers } from "./data";
import { Link } from "react-router-dom";
import CategorySection from "./categories";
import Footer from "./footer";

function MainPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };
  const displayedProducts = activeCategory
    ? filteredProducts.filter((product) => product.category === activeCategory)
    : filteredProducts;

  return (
    <>
      <div className="sliders">
        <Carousel images={offers} />
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <CategorySection OnCategoryClick={handleCategoryClick} />

      <div className="products">
        {displayedProducts.map((product) => (
          <Link
            className="product-card"
            to={`/product/${product.id}`}
            key={product.id}
          >
            <div className="product-cards">
              <div className="product_image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product_details">
                <div className="card_category">
                  <h3>{product.category}</h3>
                </div>
                <div className="card_title">
                  <p className="productTitle">{product.title}</p>
                </div>
                <div className="card_price">
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                </div>
                <div className="card_button">
                  <button className="buttonAdd">Add to Cart</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
