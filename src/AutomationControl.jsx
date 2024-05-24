import React from 'react';
import './styles/Options.css';

function OptionAutomationControl() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
          <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Openers - Operators</a>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a style={{ color: 'grey' }} href='/PlatinumGateOpeners'>Platinium Gate Openers</a>
              <a style={{ color: 'grey' }} href='/OSCO'>OSCO</a>
              <a style={{ color: 'grey' }} href='/Allstar'>Allstar</a>
              <a style={{ color: 'grey' }} href='/SEA'>SEA</a>
            </div>
          </div>


        </div>
        <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
          <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Remote Controls</a>
          <a style={{ color: 'grey' }} href='/Multi-Code'>Multi-Code</a>
          <a style={{ color: 'grey' }} href='/Long-Range'>Long Range</a>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Receivers</a>
            <a style={{ color: 'grey' }} href='#'>Doorking</a>
            <a style={{ color: 'grey' }} href='/LiftMaster'>LiftMaster</a>
          </div>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Telephone Entry</a>
            <a style={{ color: 'grey' }} href='/Sentex'>Sentex</a>
            <a style={{ color: 'grey' }} href='/Elite'>Elite</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OptionAutomationControl;
