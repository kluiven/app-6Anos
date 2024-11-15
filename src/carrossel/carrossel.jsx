import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const images = [
  'https://i.imgur.com/IeF3cbJ.jpg',
  'https://i.imgur.com/IruPS0W.jpg',
  'https://i.imgur.com/pEvpe5X.jpg',
  'https://i.imgur.com/gEij66i.jpg',
];



function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });

  return (
    <div className="carousel" {...handlers}>
      <div className="carousel__images">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="carousel__image"
        />
      </div>

      {/* Bolinhas de navegação */}
      <div className="carousel__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

