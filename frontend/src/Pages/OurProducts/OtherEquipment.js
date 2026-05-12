import React from 'react';
import styles from './OurProducts.module.css';

const OtherEquipment = () => {
  const items = [
    { title: "TILTING BOX FEEDER", cat: "FEEDING & HANDLING" },
    { title: "VIBRATORS", cat: "PRESS" },
    { title: "BELT CONVEYORS", cat: "CONVEYING" }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>Other Equipment</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
            <span style={{ fontSize: '10px', color: '#2d6a4f' }}>{item.cat}</span>
            <h4>{item.title}</h4>
            <button className={styles.viewBtn}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherEquipment;