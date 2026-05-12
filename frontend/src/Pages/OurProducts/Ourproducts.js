import React, { useState } from 'react';
import styles from './OurProducts.module.css';
import HeroSection from './HeroSection';
import ProductAccordion, { productRegistry } from './ProductAccordion';
import OtherEquipment from '../../Other Equipments/OtherEqpTemp';

const OurProducts = () => {
  const [openAccordion, setOpenAccordion] = useState("BALER");
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  // Logic to check if a category contains the search term in its name or items
  const shouldShowCategory = (categoryKey) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    const category = productRegistry[categoryKey];
    
    // Check if category title matches
    if (categoryKey.toLowerCase().includes(query)) return true;

    // Check if any sub-category or specific model matches
    return Object.keys(category).some(subKey => {
      if (subKey === 'categoryIcon') return false;
      const subCat = category[subKey];
      const modelMatch = subCat.items?.some(item => 
        item.model.toLowerCase().includes(query)
      );
      return subKey.toLowerCase().includes(query) || modelMatch;
    });
  };

  return (
    <div className={styles.container}>
      {/* Pass the search handler to the Hero */}
      <HeroSection onSearchChange={setSearchQuery} />
      
      <div className={styles.contentWrapper}>
        {shouldShowCategory("BALER") && (
          <ProductAccordion 
            title="BALER" 
            applications="Tyre scrap, Metal, Plastic, Paper & Cardboard" 
            isOpen={!!searchQuery || openAccordion === "BALER"}
            onToggle={() => handleToggle("BALER")}
            searchQuery={searchQuery}
          />
        )}

        {shouldShowCategory("PRIMARY SHREDDER") && (
          <ProductAccordion 
            title="PRIMARY SHREDDER" 
            applications="Tyre, Plastic, Metal, Paper & Cardboard | E-Waste" 
            isOpen={!!searchQuery || openAccordion === "PRIMARY SHREDDER"}
            onToggle={() => handleToggle("PRIMARY SHREDDER")}
            searchQuery={searchQuery}
          />
        )}

        {shouldShowCategory("SECONDARY SHREDDER") && (
          <ProductAccordion 
            title="SECONDARY SHREDDER" 
            applications="Europe, Metal, Plastic, Paper & Cardboard" 
            isOpen={!!searchQuery || openAccordion === "SECONDARY SHREDDER"}
            onToggle={() => handleToggle("SECONDARY SHREDDER")}
            searchQuery={searchQuery}
          />
        )}
        
        {!searchQuery && <OtherEquipment />}
      </div>
    </div>
  );
};

export default OurProducts;