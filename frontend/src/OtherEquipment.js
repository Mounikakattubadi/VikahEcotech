import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import othereqp from './OtherEqp.module.css';
import Tyrecuttingimg from './images/tyrecutting1.jpg'; // For Cutting Equipment
import tyrefolding from './images/tyre folding1.jpg'; // For Folding Equipment
import TumbleBackFeeder from './images/Tumbleback-Feeder.png';
import fdconveyer from "./images/fdconveyer.jpg";
import vibrator from "./images/vibrator.png";
import classifier from "./images/classifier.png";
import oms from "./images/oms.png";
import beedwireremover from "./images/beedwireremover.webp";
import stripcutter from "./images/stripcutter1.png";
import blockcutter from "./images/blockcutter.jpg";
import sidewallremover from "./images/sidewallremover.jpg";

const OtherEquipment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { label: "Tumble Back Feeder", path: "/tumble-back-feeder", image: TumbleBackFeeder },
    { label: "Feeding & Discharge Conveyers", path: "/feeding-discharge-conveyers", image: fdconveyer },
    { label: "Vibrators", path: "/vibrators", image: vibrator },
    { label: "Classifiers", path: "/classifiers", image: classifier },
    { label: "Overband Magnetic Steel Separators", path: "/magnetic-steel-separators", image: oms },
    { label: "Beadwire Remover", path: "/beedwire-remover", image: beedwireremover },
    { label: "Strip Cutter", path: "/strip-cutter", image: stripcutter },
    { label: "Block Cutter", path: "/block-cutter", image: blockcutter },
    { label: "Side Wall Remover", path: "/sidewall-remover", image: sidewallremover },
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
                    className={othereqp['product-img']}
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
