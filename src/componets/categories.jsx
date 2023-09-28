import React, { useState, useEffect } from "react";
import "../style/categories.css";

const CategorySection = ({ OnCategoryClick }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="categories_component">
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => OnCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      {activeCategory && (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CategorySection;
