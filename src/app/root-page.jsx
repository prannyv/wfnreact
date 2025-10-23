import { useNavigate } from 'react-router-dom';
import './directory.css';

export default function Directory() {
  const navigate = useNavigate();

  return (
    <div className="directory-container">
      <div className="directory-content">
        <h1 className="directory-title">WFN Projects Personal Sites</h1>
        <div className="buttons-container">
          <button className="site-button" onClick={() => navigate('/home')}>
            Enter Pranav & Kathy's Site →
          </button>
          <button className="site-button" onClick={() => navigate('/james-kevin')}>
            Enter James & Kevin's Site →
          </button>
          <button className="site-button" onClick={() => navigate('/annie-tudor')}>
            Enter Annie & Tudor's Site →
          </button>
        </div>
      </div>
    </div>
  );
}
