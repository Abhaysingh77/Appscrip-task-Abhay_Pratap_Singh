import React, { useState } from "react";
import { FiHeart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./ProductList.css";
import axios from "axios";
const filters = [
  { name: "CUSTOMIZABLE", options: ["All", "MEN", "WOMEN"] },
  { name: "IDEAL FOR", options: ["All"] },
  { name: "OCCASION", options: ["All"] },
  { name: "WORK", options: ["All"] },
  { name: "FABRIC", options: ["All"] },
  { name: "SEGMENT", options: ["All"] },
  { name: "SUITABLE FOR", options: ["All"] },
  { name: "RAW MATERIALS", options: ["All"] },
  { name: "PATTERN", options: ["All"] },
];



const ProductListingPage = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [expandedFilters, setExpandedFilters] = useState({});
  const [products, setProducts] = useState([]);

  const toggleFilter = (filterName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
      console.log(data.data)
      return data.data
    };
    fetchData();
  },[]);
  return (
    <div className="product-listing-page">
      <div className="top-bar">
        <span className="item-count">{products.length} ITEMS</span>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="hide-filter-btn"
        >
          {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
        <div className="recommended-dropdown">
          RECOMMENDED <FiChevronDown />
        </div>
      </div>
      <div className="content">
        {showFilters && (
          <div className="sidebar">
            {filters.map((filter) => (
              <div key={filter.name} className="filter-group">
                <button
                  onClick={() => toggleFilter(filter.name)}
                  className="filter-toggle"
                >
                  {filter.name}{" "}
                  {expandedFilters[filter.name] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedFilters[filter.name] && (
                  <ul className="filter-options">
                    {filter.options.map((option) => (
                      <li key={option}>
                        <label>
                          <input type="checkbox" /> {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                {product.id===1 && (
                  <span className="new-badge">NEW PRODUCT</span>
                )}
                {product.id===2 && (
                  <span className="out-of-stock-badge">OUT OF STOCK</span>
                )}
              </div>
              <h3 className="product-name">{product.title}</h3>
              <p className="pricing-info">
                Sign in or Create an account to see pricing
              </p>
              <button className="favorite-btn">
                <FiHeart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
