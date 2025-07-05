import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CompletedTradefair1.css';
import t1 from "./images/ifattrade/entry1.jpeg";
import t2 from "./images/ifattrade/customer1.jpeg";
import t3 from "./images/ifattrade/customer2.jpeg";
import t4 from "./images/ifattrade/customer3.jpeg";
import t5 from "./images/ifattrade/group1.jpeg";
import t6 from "./images/ifattrade/group2.jpeg";
import t7 from "./images/ifattrade/group3.jpeg";
import video1 from "./images/ifattrade/ifatvideo.mov"; 
import video2 from "./images/ifattrade/ifatvideo2.mp4"; 

const Ifat = () => {
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
        { original: video1, thumbnail: t3, renderItem: () => (
            <div className="video-gallery">
                <video controls>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )},
        { original: video2, thumbnail: t5, renderItem: () => (
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

export default Ifat;
