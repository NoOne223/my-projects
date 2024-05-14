import React, { useRef, useEffect, ReactNode } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

interface SwiperCarouselProps {
  children: ReactNode;
  slidesPerView?: number; 
}

const SwiperCarousel = ({ children }: SwiperCarouselProps) => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        // Swiper options here
        loop: true,
        autoplay: {
          delay: 3000,
        },
        slidesPerView: 1,
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        {React.Children.map(children, (child) => (
          <div className="swiper-slide">{child}</div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperCarousel;