import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import './styles/ModernDrivewayGates.css';

function ModernDrivewayGates() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
        <img src="/reja6.jpeg" alt="reja6" width={'100%'} />
        <h1>
          Modern Driveway Gates
        </h1>
        <p className="text-secondary fs-5">
          L. A. Ornamental offers a wide selection of decorative custom driveway gates in Aluminum  <br />
          or Wrought Metals. Our quality aluminum gates offer elegance, security, safety, and <br />
          complete satisfaction to our customers. We offer a large selection of designs to choose <br />
          from, but we can manufacture your custom made design if you produce the design to us.
        </p>
        <h2>Choose from a great selection of Security Gates and Safety <br />
          Gates
        </h2>
        <p style={{marginLeft: '20'}} className='text-secondary'>
          As we specialize in Front Driveway Entrance or Entry Gates, our aluminum and wrought Iron <br />
          Driveway Gates are custom built to jobsite specifications and can be ordered in grades <br />
          ranging from Residential to Commercial.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'left', alignItems: 'center' }}>
          <div style={{ flex: '1 1 calc(50% - 10rem)', display: 'flex', flexDirection: 'column', marginLeft: '12rem'}}>
            <div className="image-description" style={{ display: 'flex', flexDirection: 'column'}}>
              <img src="/reja1.jpeg" alt="reja1" style={{  width: '25rem', height: '25rem'}} />
              <p style={{marginBottom: '0px'}}><b>Model</b></p>
              <p style={{marginTop: '0px'}}>Custom Aluminum Gate</p>
            </div>

            <div className="image-description" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="/reja3.jpeg" alt="reja3" style={{  width: '25rem', height: '25rem' }} />
              <p style={{marginBottom: '0px'}}><b>Model</b></p>
              <p style={{marginTop: '0px'}}>California Modern Stylish</p>
            </div>

            <div className="image-description" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="/reja5.jpeg" alt="reja5" style={{  width: '25rem', height: '25rem' }} />
              <p style={{marginBottom: '0px'}}><b>Model</b></p>
              <p style={{marginTop: '0px'}}>Metal Aluminum Driveway Gate</p>
            </div>
          </div>

          <div style={{ flex: '1 1 calc(50% - 2rem)', display: 'flex', flexDirection: 'column' }}>
            <div className="image-description" style={{ display: 'flex', flexDirection: 'column'}}>
              <img src="/reja2.jpeg" alt="reja2" style={{  width: '25rem', height: '25rem' }} />
              <p style={{marginBottom: '0px'}}><b>Model</b></p>
              <p style={{marginTop: '0px'}}>Driveway Gates</p>
            </div>

            <div className="image-description" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="/reja4.jpeg" alt="reja4" style={{  width: '25rem', height: '25rem' }} />
              <p style={{marginBottom: '0px'}}><b>Model</b></p>
              <p style={{marginTop: '0px'}}>Front Entrance Driveway Gates</p>
            </div>
            <div className="image-description" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="/reja16.jpg" alt="reja4" style={{ width: '25rem', height: '25rem'  }} />
              <p style={{marginBottom: '0px'}}><b>Model</b></p>
              <p style={{marginTop: '0px'}}>Back Entrance Driveway Gates</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '6rem' }}>
            <ReadMoreButton title={'Contact Us'}/>
          </div>
          
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default ModernDrivewayGates;
