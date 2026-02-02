import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

//Balers
import Img1 from "./../images/Applications/plasticbaler1.jpg";
import Img2 from "./../images/Applications/apppcb6.webp";
import Img3 from "./../images/Applications/appm1.jpg";
import Img4 from "./../images/Applications/plasticbaler2.jpg";

//secondary shredder
import Img5 from "./../images/Applications/shredpcb1.jpg";
import Img6 from "./../images/Applications/secplas.jpg";
import Img7 from "./../images/Applications/secmetal.webp";
import Img8 from "./../images/R2.png";

//OtherEqp
import Img9 from "./../images/Applications/plasticbaler1.jpg";
import Img10 from "./../images/Applications/plasticbaler2.jpg";
import Img11 from "./../images/Applications/pcb1.webp";
import Img12 from "./../images/Applications/pcb3.webp";

//primary shredders
import Img13 from "./../images/Applications/shredpcb4.jpg";
import Img14 from "./../images/Applications/shredm1.jpg";
import Img15 from "./../images/Applications/shredp1.png";
import Img16 from "./../images/Applications/shredewaste2.webp";

const blogsData = [
    // Baler Blogs
    {
        title: "Hydraulic  Balers in India",
        description: "How do hydraulic tyre balers improve efficiency, safety, and overall waste management?",
        route: "/baler-info",
        image: Img1,
        category: "Baler"
    },
    {
        title: "Advanced  Baling Solutions",
        description: "Learn about modern baling technologies that optimize storage and reduce operational costs.",
        route: "/baler-scrap-management",
        image: Img2,
        category: "Baler"
    },
    {
        title: "Industrial Tyre Baling Machines",
        description: "What makes industrial tyre balers essential for large-scale recycling facilities?",
        route: "/industrial-balers-waste-management",
        image: Img3,
        category: "Baler"
    },
    {
        title: "Tyre Baler Operational Insights",
        description: "Understand how balers streamline workflow, ensure compliance, and boost resale value.",
        route: "/baler-blog4",
        image: Img4,
        category: "Baler"
    },

    // Shredder Blogs
    {
        title: "Primary Shredders – Complete Breakdown",
        description: "How do primary shredders manage bulky waste and enhance shredding efficiency?",
        route: "/shredder-blog1",
        image: Img13,
        category: "Shredder"
    },
    {
        title: "High-Capacity Tyre Shredders",
        description: "Explore performance, cost savings, and the safety features of high-capacity shredders.",
        route: "/shredder-blog2",
        image: Img14,
        category: "Shredder"
    },
    {
        title: "Shredding Technology Trends 2025",
        description: "What are the latest innovations boosting throughput and reducing downtime in shredding?",
        route: "/shredder-blog3",
        image: Img15,
        category: "Shredder"
    },
    {
        title: "Shredding Technology Trends 2025",
        description: "Discover new shredder technologies designed for better productivity and lower maintenance.",
        route: "/shredder-blog4",
        image: Img16,
        category: "Shredder"
    },

    // Secondary Shredder Blogs
    {
        title: "Secondary Shredders Explained",
        description: "Why are secondary shredders crucial for fine processing and size reduction?",
        route: "/secondaryshredder-blog1",
        image: Img5,
        category: "Secondary"
    },
    {
        title: "Dual-Shaft Secondary Shredders",
        description: "Understand how dual-shaft systems increase performance, safety, and reliability.",
        route: "/secondaryshredder-blog2",
        image: Img6,
        category: "Secondary"
    },
    {
        title: "Zero-Waste Processing with Secondary Shredders",
        description: "How do secondary shredders contribute to a complete zero-waste recycling workflow?",
        route: "/secondaryshredder-blog3",
        image: Img7,
        category: "Secondary"
    },
    {
        title: "Secondary Shredders – Cost & ROI",
        description: "Detailed cost breakdown, maintenance insights, and long-term ROI advantages.",
        route: "/secondaryshredder-blog4",
        image: Img8,
        category: "Secondary"
    },

// Other Equipment Blogs
{
    title: "How Feeding Equipment Works",
    description: "Learn how feeding equipment ensures smooth and continuous material flow in recycling operations, preventing jams and improving efficiency.",
    route: "/otherequipment-blog1",
    image: Img9,
    category: "Other"
},
{
    title: "Who Should Use Screening & Separation Equipment?",
    description: "Discover which recycling facilities benefit most from screening and separation equipment to maintain material purity and improve downstream processing.",
    route: "/otherequipment-blog2",
    image: Img10,
    category: "Other"
},
{
    title: "Types of Tyre Cutting & Preparation Machines",
    description: "Understand the different types of tyre cutting and preparation machines and how they streamline tyre recycling, from bead wire removal to block cutting.",
    route: "/otherequipment-blog3",
    image: Img11,
    category: "Other"
},
{
    title: "Impact on Efficiency and Workflow Optimization",
    description: "Explore how packing and folding equipment improves workflow, reduces manual labor, and optimizes efficiency across tyre recycling facilities.",
    route: "/otherequipment-blog4",
    image: Img12,
    category: "Other"
}

];


const BlogLandingPage = () => {
      useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Our Industrial Recycling Blogs</h1>
            <div className="row g-4">
                {blogsData.map((blog, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <Link to={blog.route} className={styles.cardLink}>
                            <div className={styles.uniqueCard}>

                                <div className={styles.topWave}>
                                    <h3>{blog.title}</h3>
                                </div>

                                <div className={styles.imageContainer}>
                                    <img src={blog.image} alt={blog.title} className={styles.machineImg} />
                                </div>

                                <div className={styles.bottomOval}>
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description}</p>
                                    <button className={styles.readMoreBtn}>Read More</button>
                                </div>

                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default BlogLandingPage;
