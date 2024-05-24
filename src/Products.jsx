import React from 'react';
import './styles/Options.css';

function OptionsComponent() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px'}}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
          <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Driveway</a>
          <a style={{ color: 'grey' }} href='/ModernDriveWayGates'>Modern Driveway Gates</a>
        </div>
        <div style={{ marginLeft: '12.4rem', display: 'flex', flexDirection: 'column'}}>
          <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Fencing</a>
          <a style={{ color: 'grey' }} href='/Fencing'>Fencing of Great World</a>
        </div>
      </div>
      <div style={{ display: 'flex'}}>
        <div style={{  marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
          <a style={{ fontWeight: 'bold', color: 'black'}} href='#'>Garden Gates</a>
          <a style={{ color: 'grey' }} href='/PrivacyGardenGates'>Privacy Garden Gates</a>
        </div>
        <div style={{ marginLeft: '13rem', display: 'flex', flexDirection: 'column'}}>
          <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Railings</a>
          <a style={{ color: 'grey' }} href='/ModernBalconyRailings'>Modern Balcony Railings</a>
        </div>
      </div>
    </div>
  );
}

export default OptionsComponent;
