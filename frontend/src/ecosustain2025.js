import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CompletedTradefair1.css';
import t1 from "./images/eco sustain 2025/images/ecosust_11.jpg";
import t2 from "./images/eco sustain 2025/images/ecosust_10.jpg";
import t3 from "./images/eco sustain 2025/images/ecosust_1.jpg";
import t4 from "./images/eco sustain 2025/images/ecosust_3.jpg";
import t5 from "./images/eco sustain 2025/images/ecosust_7.jpg";
import t6 from "./images/eco sustain 2025/images/ecosust_12.jpg";
import t7 from "./images/eco sustain 2025/images/ecosust_13.jpg";
import t8 from "./images/eco sustain 2025/images/ecosust_v8.jpg";
import t9 from "./images/eco sustain 2025/images/ecosust_15.jpg";
import video1 from "./images/eco sustain 2025/videos/edited_video.mp4"; 

const Ecosustain2025 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const images = [
        { original: t1, thumbnail: t1 },
        { original: t2, thumbnail: t2 },
        { original: t3, thumbnail: t3 },
        { original: t4, thumbnail: t4 },
        { original: t5, thumbnail: t5 },
        { original: t6, thumbnail: t6 },
        { original: t7, thumbnail: t7 },
        { original: t8, thumbnail: t8 },
        { original: t9, thumbnail: t9 },
        { original: video1, thumbnail: t2, renderItem: () => (
            <div className="video-gallery">
                <video controls>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
        )}
    ];

    return (
        <>
        
        
        <div>
            <div className="about-top-section text-white text-center py-5">
        <h1 className="display-5 fw-bold">Images and Videos of Ecosustain Expo 2025</h1>
        {/* <p className="lead">Explore the key environmental expos and sustainability events we participate in, where innovation meets responsibility.</p> */}
       <p className="mb-1"><strong></strong> 22-08-2025 to 24-08-2025</p>
      </div>
            </div>
        
        <div  className="gallery-container">
                  
            <ImageGallery items={images} />
        </div>
        </>
    );
};

export default Ecosustain2025;
