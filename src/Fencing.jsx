import { BackgroundImage, Box, Center, Title } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import './styles/Fencing.css';

function Fencing() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>    
      <Box maw="90%" mx="auto">
      <BackgroundImage 
        src="/fence_banner.png"
        radius="md"
      >
        <Box maw="30%" mx="auto">
        <Center p="md">
          <Title c="white">
          Experience the Difference with Decorative Aluminum Fences
          </Title>
        </Center> 
        </Box>
      </BackgroundImage>
      </Box>
  
        <p className="text-secondary fs-5 centered">
        L.A. Ornamental offers a superior selection of custom fences, crafted from high-quality
aluminum or wrought iron. We take pride in creating beautiful and long-lasting fences that
enhance your property's security, safety, and elegance.
        </p>

        <h2>Ready to get started?</h2>

        <p className="text-secondary fs-5 centered" id="hola">Browse through our fence selections and designs for inspiration. If you have a specific design in mind,
don't hesitate to send it our way – we'll be happy to match it or create a custom solution for you. </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2>Pacific Tide</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            This type works well for the Garden and home  <br />
            that has a rustic country look. <br />
            </p>
            <div style={{ marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence1.png" alt="reja7" style={{ width: '25rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence2.png" alt="reja8" style={{ width: '25rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Brittany Spears</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            A Traditional Mediterenian Style   <br />
            Picket Aluminum Fence. <br />
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>In The Circle</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            This modern Fence Design can be <br />
            made as a Entrance Gate, Garden Gate  <br />
            Or Driveway Gate.  <br />
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence3.png" alt="reja9" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence4.png" alt="reja10" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Superior Circle</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            The spears or Finales is what makes this Fence stand <br />
            out but we have a large selection of finales  <br />
            to choose from, like all of our Aluminum Fence Gates and <br />
            Railing this product is Powder Coat Oven Baked for a  <br />
            Maintenance Free Fence.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>Lucky Horse Shoe <br /> Gate</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            The width of the panels is 6ft but we can <br />
            custom make it to any width that is required. <br />
            Posts are 2"x 2", Top and Bottom horizontal  <br />
            are 1"x 2".
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence5.png" alt="reja11" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence6.png" alt="reja12" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Pedals Of Security</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            This Simple but Elegant Style Picket Fence is <br />
            composed of 3 horizontal 1"x 2", Pickets are   <br />
            1" x 1" with slip collars in every two pickets, <br />
            between top two horizontal is a rosset which is <br />
            double side so it looks great inside or out side.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
          <h2>Modernly Rustic</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            This Fence Design has a sharp peak at the  <br />
            center but also available with a straight  <br />
            top, the solid plate that's across the <br />
            bottom make this Fence Design Outstanding.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence7.png" alt="reja13" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/fence8.png" alt="reja14" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Plain Picket Fence</h2>
            <p className='text-secondary' style={{marginLeft: '100px'}}>
            There are few things as warm and welcoming as   <br />
            a White Picket Fence. A properly built and <br />
            installed fence can beautify a home's landscape, <br />
            define property lines and add Security. 
            
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>

  );
}

export default Fencing;
