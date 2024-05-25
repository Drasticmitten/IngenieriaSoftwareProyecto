import React from 'react';
import './styles/Options.css';

function OptionAutomationControl() {
  // Example function to handle what happens when "buttons" are clicked
  const handleActionClick = (actionName) => {
    console.log(`Action: ${actionName}`);
    // Add functionality as needed
  }

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
          <button className="link-button" onClick={() => handleActionClick('Openers - Operators')} style={{ fontWeight: 'bold', color: 'black' }}>Openers - Operators</button>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a style={{ color: 'grey' }} href='/PlatinumGateOpeners'>Platinum Gate Openers</a>
              <a style={{ color: 'grey' }} href='/OSCO'>OSCO</a>
              <a style={{ color: 'grey' }} href='/Allstar'>Allstar</a>
              <a style={{ color: 'grey' }} href='/SEA'>SEA</a>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
          <button className="link-button" onClick={() => handleActionClick('Remote Controls')} style={{ fontWeight: 'bold', color: 'black' }}>Remote Controls</button>
          <a style={{ color: 'grey' }} href='/Multi-Code'>Multi-Code</a>
          <a style={{ color: 'grey' }} href='/Long-Range'>Long Range</a>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <button className="link-button" onClick={() => handleActionClick('Receivers')} style={{ fontWeight: 'bold', color: 'black' }}>Receivers</button>
            <a style={{ color: 'grey' }} href='#'>Doorking</a>  {/* Adjust href if needed */}
            <a style={{ color: 'grey' }} href='/LiftMaster'>LiftMaster</a>
          </div>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <button className="link-button" onClick={() => handleActionClick('Telephone Entry')} style={{ fontWeight: 'bold', color: 'black' }}>Telephone Entry</button>
            <a style={{ color: 'grey' }} href='/Sentex'>Sentex</a>
            <a style={{ color: 'grey' }} href='/Elite'>Elite</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionAutomationControl;
