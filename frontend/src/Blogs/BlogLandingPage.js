import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

// Example dummy images (replace with actual blog images)
import Img1 from "./../images/Applications/plasticbaler1.jpg";
import Img2 from "./../images/Applications/plasticbaler2.jpg";
import Img3 from "./../images/Applications/pcb1.webp";
import Img4 from "./../images/Applications/pcb3.webp";

const blogsData = [
    // Baler Blogs
    {
        title: "Hydraulic Tyre Balers in India",
        description: "How do hydraulic tyre balers improve efficiency, safety, and overall waste management?",
        route: "/BalerBlog1",
        image: Img1,
        category: "Baler"
    },
    {
        title: "Advanced Tyre Baling Solutions",
        description: "Learn about modern baling technologies that optimize storage and reduce operational costs.",
        route: "/BalerBlog2",
        image: Img2,
        category: "Baler"
    },
    {
        title: "Industrial Tyre Baling Machines",
        description: "What makes industrial tyre balers essential for large-scale recycling facilities?",
        route: "/BalerBlog3",
        image: Img3,
        category: "Baler"
    },
    {
        title: "Tyre Baler Operational Insights",
        description: "Understand how balers streamline workflow, ensure compliance, and boost resale value.",
        route: "/BalerBlog4",
        image: Img4,
        category: "Baler"
    },

    // Shredder Blogs
    {
        title: "Primary Shredders – Complete Breakdown",
        description: "How do primary shredders manage bulky waste and enhance shredding efficiency?",
        route: "/ShredderBlog1",
        image: Img1,
        category: "Shredder"
    },
    {
        title: "High-Capacity Tyre Shredders",
        description: "Explore performance, cost savings, and the safety features of high-capacity shredders.",
        route: "/ShredderBlog2",
        image: Img2,
        category: "Shredder"
    },
    {
        title: "Shredding Technology Trends 2025",
        description: "What are the latest innovations boosting throughput and reducing downtime in shredding?",
        route: "/ShredderBlog3",
        image: Img3,
        category: "Shredder"
    },
    {
        title: "Shredding Technology Trends 2025",
        description: "Discover new shredder technologies designed for better productivity and lower maintenance.",
        route: "/ShredderBlog4",
        image: Img4,
        category: "Shredder"
    },

    // Secondary Shredder Blogs
    {
        title: "Secondary Shredders Explained",
        description: "Why are secondary shredders crucial for fine processing and size reduction?",
        route: "/SecondaryShredderBlog1",
        image: Img1,
        category: "Secondary"
    },
    {
        title: "Dual-Shaft Secondary Shredders",
        description: "Understand how dual-shaft systems increase performance, safety, and reliability.",
        route: "/SecondaryShredderBlog2",
        image: Img2,
        category: "Secondary"
    },
    {
        title: "Zero-Waste Processing with Secondary Shredders",
        description: "How do secondary shredders contribute to a complete zero-waste recycling workflow?",
        route: "/SecondaryShredderBlog3",
        image: Img3,
        category: "Secondary"
    },
    {
        title: "Secondary Shredders – Cost & ROI",
        description: "Detailed cost breakdown, maintenance insights, and long-term ROI advantages.",
        route: "/SecondaryShredderBlog4",
        image: Img4,
        category: "Secondary"
    },

// Other Equipment Blogs
{
    title: "How Feeding Equipment Works",
    description: "Learn how feeding equipment ensures smooth and continuous material flow in recycling operations, preventing jams and improving efficiency.",
    route: "/OtherEquipmentBlog1",
    image: Img1,
    category: "Other"
},
{
    title: "Who Should Use Screening & Separation Equipment?",
    description: "Discover which recycling facilities benefit most from screening and separation equipment to maintain material purity and improve downstream processing.",
    route: "/OtherEquipmentBlog2",
    image: Img2,
    category: "Other"
},
{
    title: "Types of Tyre Cutting & Preparation Machines",
    description: "Understand the different types of tyre cutting and preparation machines and how they streamline tyre recycling, from bead wire removal to block cutting.",
    route: "/OtherEquipmentBlog3",
    image: Img3,
    category: "Other"
},
{
    title: "Impact on Efficiency and Workflow Optimization",
    description: "Explore how packing and folding equipment improves workflow, reduces manual labor, and optimizes efficiency across tyre recycling facilities.",
    route: "/OtherEquipmentBlog4",
    image: Img4,
    category: "Other"
}

];


const BlogLandingPage = () => {
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
