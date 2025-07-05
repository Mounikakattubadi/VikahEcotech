import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CompletedTradefair1.css';
import t1 from "./images/Tradefair/1.19.jpg";
import t2 from "./images/Tradefair/1.30.jpg";
import t3 from "./images/Tradefair/1.17.jpg";
import t4 from "./images/Tradefair/1.8.jpg";
import t5 from "./images/Tradefair/1.11.jpg";
import t6 from "./images/Tradefair/1.10.jpg";
import t7 from "./images/Tradefair/1.5.jpg";
import t8 from "./images/Tradefair/1.7.jpg";
import t9 from "./images/Tradefair/1.14.jpg";
import video1 from "./images/Tradefair/1.20.mp4"; 
import video2 from "./images/Tradefair/1.22.mp4";

const CompletedTradefair1 = () => {
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
        )},
        { original: video2, thumbnail: t3, renderItem: () => (
            <div className="video-gallery">     
                <video controls>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )}
    ];

    return (
        <div  className="gallery-container">
            <ImageGallery items={images} />
        </div>
    );
};

export default CompletedTradefair1;
