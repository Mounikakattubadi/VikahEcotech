import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tyrecuttingimg from './images/tyrecutting1.jpg'; // For Cutting Equipment
import tyrefolding from './images/tyre folding1.jpg'; // For Folding Equipment

const OtherEquipment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { label: "Tumble Back Feeder", path: "/tumble-back-feeder" },
    { label: "Feeding & Discharge Conveyers", path: "/feeding-discharge-conveyers" },
    { label: "Vibrators", path: "/vibrators" },
    { label: "Classifiers", path: "/classifiers" },
    { label: "Overband Magnetic Steel Separators", path: "/magnetic-steel-separators" },
    { label: "Beedwire Remover", path: "/beedwire-remover" },
    { label: "Strip Cutter", path: "/strip-cutter" },
    { label: "Block Cutter", path: "/block-cutter" },
    { label: "Side Wall Remover", path: "/sidewall-remover" },
    { label: "Cutting Equipment", path: "/tyrecutting", image: Tyrecuttingimg },
    { label: "Folding Equipment", path: "/tyrefolding", image: tyrefolding },
  ];

  return (
    <div className="container py-5 text-center">
      <h2 className="green-heading mb-4">Other Equipment</h2>
      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <Link to={product.path}>
              <div
                className="product-card d-flex flex-column align-items-center justify-content-center"
                style={{ height: '100%' }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.label}
                    className="product-img"
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{
                      width: '100%',
                      height: '150px',
                      border: '1px dashed #ccc',
                      borderRadius: '8px',
                      color: '#888',
                      fontSize: '14px',
                    }}
                  >
                    Uploading Soon
                  </div>
                )}
                <div className="product-label mt-2">{product.label}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherEquipment;
