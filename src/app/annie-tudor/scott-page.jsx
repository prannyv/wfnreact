import './scott-page.css'; 
import React, { useEffect, useState } from 'react';

// Image imports
import projects_aurafarm from "./scott-page-images/projects_aurafarm.JPG";
import me_pic from "./scott-page-images/me-pic.JPG";
import family_pic from "./scott-page-images/family-pic.JPG";
import music_pic from "./scott-page-images/music-pic.JPG";
import sports_pic from "./scott-page-images/sports-pic.JPG";
import friends_pic from "./scott-page-images/friends-pic2.JPG";
import video_games_pic from "./scott-page-images/video-games-pic.PNG";
import bridge_pic from "./scott-page-images/bridge-pic.JPG";
import dog_pic from "./scott-page-images/dog-pic.JPG";
import daisy_pic from "./scott-page-images/daisy-pic.JPG";
import aurafarm_pic from "./scott-page-images/aurafarm-pic.JPG";
import popo_pic from "./scott-page-images/popo-pic.JPG";
import flo_pic from "./scott-page-images/flo-pic.JPG";

export default function ScottPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // All images in an array for easy mapping
  const images = [
    projects_aurafarm,
    me_pic,
    friends_pic,
    family_pic,
    sports_pic,
    music_pic,
    video_games_pic,
    bridge_pic,
    dog_pic,
    daisy_pic,
    popo_pic,
    flo_pic,
    aurafarm_pic,
  ];

  return (
    <div className="page-container">
      <div>
        <a href="/annie-tudor" className='back-to-home'>Back to Home</a>
        <h1 className="title" style={{ transform: `translateX(${-scrollY}px)` }}>
          Scott
        </h1>
      </div>

      <h1 className="title" style={{ transform: `translateX(${-scrollY * 3}px)` }}>
        Picture Time!
      </h1>

      {images.map((img, index) => {
        const direction = index % 2 === 0 ? 1 : -1; // alternate left/right
        const imageFullHeight = 700 + 40; // height + top/bottom margin
        const offset = index * imageFullHeight;
        const transformX = (scrollY - offset) * 0.5 * direction; // adjust speed here

        return (
          <img
            key={index}
            src={img}
            className="images-container"
            style={{ transform: `translateX(${transformX}px)` }}
          />
        );
      })}
    </div>
  );
}
