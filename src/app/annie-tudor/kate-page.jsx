import img from './cute-cartoon-strawberries-pastel-grid-open-side-zone-charming-minimal-design-appeal-colorful-arranged-392129768.webp'

const KatePage = () => {
  return (

    
    
    <div
  style={{
    position: "relative",
    backgroundColor: "lightpink",
    height: "100vh",
    textAlign: "center",
  }}
>
  
  <div
    style={{
      // position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "120px",                 
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",         
      backgroundRepeat: "repeat",      
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "50%",                    
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "36px",
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        fontFamily: "'Titan One', sans-serif",
      }}
    >
      KATE CHEN
    </div>
  </div>

  {/* Page content below */}
  <a href="/annie-tudor" style={{ display: "block", marginTop: "140px", marginLeft: "10px" }}>
    Back to Home
  </a>
  <h2 style={{ marginLeft: "100px" }}>3</h2>
  <button
    style={{
      marginLeft: "200px",
      backgroundColor: "lightblue",
      border: "2px solid green",
      borderRadius: "10px",
      padding: "10px 20px",
      cursor: "pointer",
     
    }}
  >
    Hobbies
  </button>
</div>

      )
      }

export default KatePage