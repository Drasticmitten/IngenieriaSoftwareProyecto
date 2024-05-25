import React from 'react';
import './styles/Options.css';

function OptionsComponent() {
  const handleClick = (event) => {
    console.log(`${event.target.name} clicked`);
    // Aquí puedes agregar más lógica según el elemento que se cliquea
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
          <button name="Driveway" style={linkStyle} onClick={handleClick}>
            Driveway
          </button>
          <a style={{ color: 'grey' }} href='/ModernDriveWayGates'>Modern Driveway Gates</a>
        </div>
        <div style={{ marginLeft: '12.4rem', display: 'flex', flexDirection: 'column' }}>
          <button name="Fencing" style={linkStyle} onClick={handleClick}>
            Fencing
          </button>
          <a style={{ color: 'grey' }} href='/Fencing'>Fencing of Great World</a>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{  marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
          <button name="Garden Gates" style={linkStyle} onClick={handleClick}>
            Garden Gates
          </button>
          <a style={{ color: 'grey' }} href='/PrivacyGardenGates'>Privacy Garden Gates</a>
        </div>
        <div style={{ marginLeft: '13rem', display: 'flex', flexDirection: 'column' }}>
          <button name="Railings" style={linkStyle} onClick={handleClick}>
            Railings
          </button>
          <a style={{ color: 'grey' }} href='/ModernBalconyRailings'>Modern Balcony Railings</a>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  fontWeight: 'bold', 
  color: 'black', 
  background: 'none', 
  border: 'none', 
  padding: 0, 
  margin: 0, 
  cursor: 'pointer', 
  textDecoration: 'underline',
  fontSize: 'inherit'
};

export default OptionsComponent;
