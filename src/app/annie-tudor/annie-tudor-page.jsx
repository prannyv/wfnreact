import { useNavigate } from 'react-router-dom';
import './annie-tudor.css';

export default function AnnieTudorPage() {
  const navigate = useNavigate();
  const students = [
    { id: 'junior', name: 'Junior', color: '#FF6B6B' },
    { id: 'scott', name: 'Scott', color: '#4ECDC4' },
    { id: 'kate', name: 'Kate', color: '#45B7D1' },
    { id: 'lucas', name: 'Lucas', color: '#FFA07A' }
  ];

  return (
    <div className="at-container">
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          zIndex: 1000
        }}
      >
        ← Back to Directory
      </button>
      <div className="at-bubbles-container">
        {students.map((student) => (
          <div 
            key={student.id}
            className="at-bubble" 
            style={{ backgroundColor: student.color }}
            onClick={() => navigate(`/annie-tudor/${student.id}`)}
          >
            {student.name}
          </div>
        ))}
      </div>

      <div className="at-hero-section">
        <div className="at-name-container">
          <h1 className="at-name">Annie & Tudor</h1>
          <div className="at-subtitle">WFN VPs</div>
        </div>
      </div>

      <div className="at-content-grid">
        <div className="at-card">
          <div className="at-card-icon">🚀</div>
          <h2>About Us</h2>
          <p>
            Hey there! We're passionate about teaching coding to the next generation. 
            We believe that learning to code should be fun, creative, and accessible to everyone.
          </p>
        </div>

        <div className="at-card">
          <div className="at-card-icon">💻</div>
          <h2>Coding Journey</h2>
          <p>
            We've been coding for many years, specializing in web development and React. 
            Started our journey and never looked back!
          </p>
        </div>

        <div className="at-card">
          <div className="at-card-icon">🎮</div>
          <h2>Fun Fact</h2>
          <p>
            When we're not coding, you can find us playing video games, solving puzzles 
            or building random projects.
          </p>
        </div>

        <div className="at-card">
          <div className="at-card-icon">🌟</div>
          <h2>Teaching Philosophy</h2>
          <p>
            We believe in learning by doing. Every mistake is a step forward, and every bug 
            is just a puzzle waiting to be solved. Let's build cool stuff together!
          </p>
        </div>

        <div className="at-card">
          <div className="at-card-icon">🎨</div>
          <h2>Favorites</h2>
          <p>
            Favorite Language: JavaScript<br/>
            Favorite Framework: React (obviously!)<br/>
            Favorite Snack While Coding: Coffee<br/>
            Favorite Debugging Method: Console.log everything!
          </p>
        </div>

        <div className="at-card">
          <div className="at-card-icon">🏆</div>
          <h2>Random Skills</h2>
          <p>
            Can type fast, knows way too many keyboard shortcuts, has memorized 
            various coding patterns, and can solve problems efficiently.
          </p>
        </div>
      </div>

      <footer className="at-footer">
        <p>🎓 Welcome to our React Club! Let's learn and build amazing things together!</p>
      </footer>
    </div>
  );
}