import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const [banners, setBanners] = useState([
    "/images/Heroimg.png",
    "/images/online_shopping_2.jpg",
    "/images/family.jpg",
  ]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div>
      <h1>Homepage</h1>
      <Carousel
        showArrows={true}
        showThumbs={false}
        selectedItem={currentBannerIndex}
      >
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              height={600}
              width={1400}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
