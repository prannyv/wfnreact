import { useState } from 'react';
import "./maxwell-page.css";
import maxwellImage from "./images/IMG_3816.png";
import crImage from "./images/CR.jpeg";
import smokey from "./images/smokey.JPG";
import img4716 from "./images/IMG_4716.png";
import img4751 from "./images/IMG_4751.PNG";
import img5372 from "./images/IMG_5372.png";
import img4799 from "./images/IMG_4799.png";

export default function MaxwellPage() {
  const catPhotos = [maxwellImage, smokey, img4716, img5372];
  const clashRoyalePhotos = [img4799, crImage, img4751];
  
  const [catIndex, setCatIndex] = useState(0);
  const [crIndex, setCrIndex] = useState(0);

  const nextCatPhoto = () => {
    setCatIndex((prevIndex) => (prevIndex + 1) % catPhotos.length);
  };

  const nextCRPhoto = () => {
    setCrIndex((prevIndex) => (prevIndex + 1) % clashRoyalePhotos.length);
  };

  return (
    <div className="maxwell-container">
      <div className="maxwell-content">
        <div className="name-box">
        <h1 className="maxwell-title">Maxwell</h1>
        <a href="/james-kevin">Back to Home</a>
        </div>
        <div className="info-box">
          <h2>Introduction</h2>
          <p>Birthday is February 2nd</p>
          <h3>Interests</h3>
          <p>Swimming, trading on stock market, Cooking</p>
          <h4>I'm getting <strong>cooked</strong> by CS</h4>
        </div>
        
        <h3>Cat Photos</h3>
        <div className="carousel">
          <img src={catPhotos[catIndex]} alt="Cat" className="maxwell-image" />
          <button onClick={nextCatPhoto} className="next-button">Next</button>
        </div>

        <h3>Clash Royale</h3>
        <div className="carousel">
          <img src={clashRoyalePhotos[crIndex]} alt="Clash Royale" className="maxwell-image" />
          <button onClick={nextCRPhoto} className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
} 