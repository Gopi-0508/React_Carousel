# Ex05 Image Carousel
## Date: 31.05.2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
carousel.jsx
```
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
```
carousel.css
```
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(135deg,#0f172a,#1e293b);
  font-family:'Poppins',sans-serif;
}

.carousel{
  position:relative;
  width:900px;
  overflow:hidden;
  border-radius:20px;
  box-shadow:0 20px 40px rgba(0,0,0,0.5);
}

.image-container{
  position:relative;
}

.image-container img{
  width:100%;
  height:500px;
  object-fit:cover;
  display:block;
  transition:0.5s ease;
}

.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.35);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  text-align:center;
}

.overlay h1{
  font-size:3rem;
  margin-bottom:10px;
  text-shadow:0 3px 10px rgba(0,0,0,0.5);
}

.overlay p{
  font-size:1.2rem;
}

.arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  border:none;
  background:rgba(255,255,255,0.2);
  color:white;
  font-size:2rem;
  width:55px;
  height:55px;
  border-radius:50%;
  cursor:pointer;
  z-index:10;
  backdrop-filter:blur(8px);
  transition:0.3s;
}

.arrow:hover{
  background:rgba(255,255,255,0.4);
}

.left{
  left:20px;
}

.right{
  right:20px;
}

.dots{
  position:absolute;
  bottom:20px;
  width:100%;
  text-align:center;
}

.dot{
  display:inline-block;
  width:12px;
  height:12px;
  margin:0 6px;
  border-radius:50%;
  background:#ffffff88;
  cursor:pointer;
  transition:0.3s;
}

.dot.active{
  width:30px;
  border-radius:20px;
  background:white;
}
```

## OUTPUT
![alt text](<Screenshot 2026-05-31 152736.png>)
![alt text](<Screenshot 2026-05-31 152758.png>)
![alt text](<Screenshot 2026-05-31 152819.png>)
![alt text](<Screenshot 2026-05-31 152905.png>)
![alt text](<Screenshot 2026-05-31 152848.png>)

## RESULT
The program for creating Image Carousel using React is executed successfully.
