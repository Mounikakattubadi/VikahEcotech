import React from "react";
import { Link } from "react-router-dom";
import "./RelatedEquipments.css";

const RelatedEquipments = ({ current }) => {
    const products = [
        { label: "Tumble Back Feeder", path: "/tumble-back-feeder", image: "/images/tbf.png" },
        { label: "Feeding & Discharge Conveyers", path: "/feeding-discharge-conveyers", image: "/images/fdc.png" },
        { label: "Vibrators", path: "/vibrators", image: "/images/vibrator.png" },
        { label: "Classifiers", path: "/classifiers", image: "/images/classifier.png" },
        { label: "Overband Magnetic Steel Separators", path: "/magnetic-steel-separators", image: "/images/oms.png" },
        { label: "Beadwire Remover", path: "/beedwire-remover", image: "/images/beadwire.png" },
        { label: "Strip Cutter", path: "/strip-cutter", image: "/images/stripcutter.png" },
        { label: "Block Cutter", path: "/block-cutter", image: "/images/blockcutter.png" },
        { label: "Side Wall Remover", path: "/sidewall-remover", image: "/images/sidewallremover.png" },
        { label: "Tyre Cutting Machines", path: "/tyrecutting", image: "/images/tyrecutting.png" },
        { label: "Tyre Folding Machines", path: "/tyrefolding", image: "/images/tyrefolding.png" },
    ];

    const filtered = products.filter((p) => p.path !== current);

    // Duplicate array to make infinite loop effect
    const infiniteList = [...filtered, ...filtered, ...filtered];

    return (
        <section className="related-section" aria-label="Related Equipment">
            <h3 className="text-center fw-bold mb-4">Related Other Equipment</h3>
            <div className="auto-scroll-wrapper">
                <div className="auto-scroll">
                    {infiniteList.map((p, index) => (
                        <article
                            className="related-card shadow-sm"
                            key={index}
                            aria-hidden={index >= filtered.length ? "true" : "false"}
                        >
                            <img
                                src={p.image}
                                alt={`${p.label} – Tyre Recycling Equipment`}
                                className="related-img"
                            />
                            <h6 className="mt-2 text-center fw-semibold">{p.label}</h6>
                            <Link
                                to={p.path}
                                title={`View ${p.label} details`}
                                className="btn btn-success btn-sm mt-2 w-100"
                            >
                                View
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedEquipments;