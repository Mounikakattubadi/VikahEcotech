import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Baler from "./images/baler.png";
import Tyrefolding from "./images/tyre folding1.jpg";
import Tyrecutting from "./images/tyrecutting1.jpg";
import Shredder from "./images/Shedder _ Final PNG.png";

function Ourproducts() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const products = [
    {
      title: "Balers",
      image: Baler,
      desc: "Compact your recyclable materials with our efficient balers — engineered for durability and easy operation.",
      link: "/Baler"
    },
    {
      title: "Shredders",
      image: Shredder,
      desc: "Heavy-duty shredding systems designed to break down tires, plastics, and more into manageable pieces.",
      link: "/shredder"
    },
    {
      title: "Cutting Equipment",
      image: Tyrecutting,
      desc: "Our cutting solutions ensure precision and safety in tire processing operations.",
      link: "/tyrecutting"
    },
    {
      title: "Folding Equipment",
      image: Tyrefolding,
      desc: "Innovative folding machines for space-saving solutions in recycling and logistics.",
      link: "/tyrefolding"
    }
  ];

  return (
    <div>
      <div className="about-top-section text-white text-center py-5">
        <h1 className="display-5 fw-bold">Our Products</h1>
        <p className="lead px-3">
          Discover our specialized recycling machinery crafted to drive sustainability and efficiency across industries.
        </p>
        <p><Link to="/" className="text-white-50 text-decoration-none">Home</Link> &gt; <span className="text-white">Products</span></p>
      </div>

      <div className="products-section-bg py-5">
        <div className="container">
          <h2 className="green-heading text-center mb-5">Our Products</h2>

          {products.map((product, index) => (
            <div
              className={`row align-items-center mb-5 products-row ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}
              key={index}
            >
              <div className="col-md-6 product-img-col">
                <img src={product.image} alt={product.title} className="img-fluid rounded shadow product-feature-img" />
              </div>
              <div className="col-md-6 product-text-col">
                <h3 className="green-heading">{product.title}</h3>
                <p>{product.desc}</p>
                <Link to={product.link} className="btn btn-outline-success">View {product.title}</Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Ourproducts;
