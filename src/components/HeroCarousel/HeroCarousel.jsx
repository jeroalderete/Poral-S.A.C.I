import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css'; // Importa tu archivo CSS aquí
import img1 from '../../../public/assets/slide1-banner.jpg';
import img2 from '../../../public/assets/slide2-banner.png';
import img3 from '../../../public/assets/slide3-banner.png';
import img4 from '../../../public/assets/slide4-banner.jpg';
import img6 from '../../../public/assets/slide6-banner.png';
import img7 from '../../../public/assets/slide7-banner.png';
import img8 from '../../../public/assets/slide8-banner.jpg';
import img9 from '../../../public/assets/slide9-banner.png';

const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img6 },
    { id: 6, src: img7 },
    { id: 7, src: img8 },
    { id: 8, src: img9 }
  ];

const BannerCarousel = () => {
  const customArrowStyles = {
    position: 'absolute',
    top: '62%',
    transform: 'translateY(-50%)',
    zIndex: '999',
  };

  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...customArrowStyles, left: '20px' }}
          >
            <ion-icon style={{ fontSize: '28px' }} name="chevron-back-outline"></ion-icon>
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...customArrowStyles, right: '20px' }}
          >
            <ion-icon style={{ fontSize: '28px' }} name="chevron-forward-outline"></ion-icon>
          </button>
        )}
      >
          {images.map(image => (
           <div key={image.id}>
           <img src={image.src} alt={`Banner ${image.id}`} />
         </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
