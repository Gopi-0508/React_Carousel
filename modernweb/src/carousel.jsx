import React, { useState, useEffect } from "react";
import "./carousel.css";

function Carousel() {
  const images = [
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200", // Taj Mahal
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200", // Great Wall of China
  "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=1200", // Petra
  "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200", // Colosseum
  "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200", // Machu Picchu
  "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200", // Christ the Redeemer
  "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200"  // Chichen Itza
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [pause, currentIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <button className="arrow left" onClick={prevImage}>
        ❮
      </button>

      <div className="image-container">
        <img src={images[currentIndex]} alt="Travel Destination" />

        <div className="overlay">
          <h1>Explore The World</h1>
          <p>Discover breathtaking destinations</p>
        </div>
      </div>

      <button className="arrow right" onClick={nextImage}>
        ❯
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;