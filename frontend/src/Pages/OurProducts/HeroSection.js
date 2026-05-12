import React from 'react';
import { ShieldCheck, Leaf, Settings, Award, Search, LayoutGrid, Settings2, Globe, Hourglass } from 'lucide-react';
import styles from './HeroSection.module.css';
import ourprodbg from '../../images/ourprodbg.png'; 

const HeroSection = ({ onSearchChange }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.heroCard}>
        <div className={styles.leftSide}>
          <div className={styles.badge}>OUR PRODUCTS</div>
          <h1 className={styles.mainTitle}>
            Engineered for Performance.<br />
            Built for a Greener Future.
          </h1>
          <p className={styles.subtext}>
            Discover our range of industrial recycling equipment designed for 
            maximum efficiency, durability and sustainability.
          </p>
          
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search machines, categories, applications..." 
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <div className={styles.featureGrid}>
            <FeatureCard title="High Performance" desc="Maximum output with efficiency" Icon={ShieldCheck} />
            <FeatureCard title="Eco Friendly" desc="Built with sustainability at the core" Icon={Leaf} />
            <FeatureCard title="Low Maintenance" desc="Reliable machines with minimal upkeep" Icon={Settings} />
            <FeatureCard title="Certified Quality" desc="Tested. Certified. Trusted worldwide." Icon={Award} />
          </div>
        </div>

        <div className={styles.rightSide}>
          <img src={ourprodbg} alt="Machine" className={styles.machineImg} />
          <div className={styles.statsCard}>
            <StatItem Icon={LayoutGrid} value="10+" label="Product Categories" />
            <StatItem Icon={Settings2} value="200+" label="Machines Delivered" />
            <StatItem Icon={Globe} value="50+" label="Countries Served" />
            <StatItem Icon={Hourglass} value="15+" label="Years Experience" />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, desc, Icon }) => (
  <div className={styles.fCard}>
    <Icon size={24} strokeWidth={1.5} color="#2d6a4f" className={styles.fIcon} />
    <strong>{title}</strong>
    <p>{desc}</p>
  </div>
);

const StatItem = ({ Icon, value, label }) => (
  <div className={styles.statBox}>
    <div className={styles.statIconCircle}>
      <Icon size={14} strokeWidth={2} />
    </div>
    <h3>{value}</h3>
    <span>{label}</span>
  </div>
);

export default HeroSection;