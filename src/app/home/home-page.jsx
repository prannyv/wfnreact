import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './home.css';

export default function Home() {
  const navigate = useNavigate();
  const [photoOrder, setPhotoOrder] = useState([1, 2, 3, 4, 5, 6]);

  const handlePhotoHover = (photoNumber) => {
    setPhotoOrder(prev => {
      const newOrder = [...prev];
      const currentIndex = newOrder.indexOf(photoNumber);
      if (currentIndex !== -1) {
        // Move the hovered photo to the end (highest z-index)
        newOrder.splice(currentIndex, 1);
        newOrder.push(photoNumber);
      }
      return newOrder;
    });
  };

  const students = [
    { id: 'reuben', name: 'Reuben', color: '#FF6B6B' },
    { id: 'tahir', name: 'Tahir', color: '#4ECDC4' },
    { id: 'crystal', name: 'Crystal', color: '#45B7D1' },
    { id: 'james', name: 'James', color: '#FFA07A' }
  ];

  return (
    <div className="container">
      <button 
        onClick={() => navigate('/')}
        className="magic-back-button"
      >
        <span className="button-content">
          <span className="button-icon">←</span>
          <span className="button-text">Back to Directory</span>
        </span>
        <div className="ripple-effect"></div>
        <div className="glow-effect"></div>
      </button>
      
      <div className="collage-container">
        <div className="photo-collage">
          {[1, 2, 3, 4, 5, 6].map((photoNumber) => (
            <img 
              key={photoNumber}
              src={`/pk-media/photo${photoNumber}.jpeg`} 
              alt={`Pranav & Kathy Photo ${photoNumber}`} 
              className={`collage-photo photo-${photoNumber}`}
              style={{ zIndex: photoOrder.indexOf(photoNumber) + 1 }}
              onMouseEnter={() => handlePhotoHover(photoNumber)}
            />
          ))}
        </div>
        
        <div className="hero-section">
          <div className="name-container">
            <h1 className="name">Pranav & Kathy</h1>
            <div className="subtitle">WFN VPs</div>
          </div>
        </div>
      </div>

      <div className="bubbles-container">
        {students.map((student) => (
          <div 
            key={student.id}
            className="bubble" 
            style={{ backgroundColor: student.color }}
            onClick={() => navigate(`/home/${student.id}`)}
          >
            {student.name}
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>🎓 Welcome to our React Club! Let's learn and build amazing things together!</p>
      </footer>
    </div>
  );
}
