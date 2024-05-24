import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import './styles/PrivacyGardenGates.css';

function PrivacyGardenGates() {
  const modelNames = [
    "Modern Square",
    "Gem Stone",
    "Royal Seal",
    "Oasis",
    "Morning Rose",
    "Artistic Iron",
    "Arch with Heart",
    "Wave of Elegance",
    "Arch Vine"
  ];

  return (
    <div className="App">
      <Navbar />
      <header className='App-header' style={{ marginTop: '100px' }}>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6rem',
          justifyContent: 'center',
          background: 'pink',
          paddingBottom: '4rem',
          width: 'auto',
          height: 'content',
          margin: 'auto'
        }}>

          <div style={{ flex: 'none' }}>
            <img src="/reja17.jpg" alt="reja17" style={{ width: '100%' }} />
          </div>

          <p style={{ fontSize: '40px', marginLeft: '0px' }}>
            <b> L. A. Ornamental <br />
              Corp offers a <br />
              unlimited <br />
              selection of <br />
              Aluminum or <br />
              Wrought Iron <br />
              Garden Gates.
            </b>
          </p>
        </div>

        <h1>
          Privacy Garden Gates
        </h1>
        <p className="text-secondary fs-5">
          L. A. Ornamental Corp offers garden gates with different styles and designs to suit your <br />
          decor needs for an elegant, classic garden entryway gate. Our garden gates are constructed <br />
          of aluminum or wrought iron for longevity and frequent use but have open designs to allow a <br />
          better view and air circulation to the entryway or walk way.
        </p>
        <h2>Choose from a large selection of <br />
          powder coated colors which <br />
          withstand years of weather <br />
          conditions.
        </h2>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          textAlign: 'left',
          marginRight: '4rem',
          marginLeft: '4rem'
        }}>
          {modelNames.map((modelName, index) => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img src={`/reja${7 + index}.jpeg`} alt={`reja${7 + index}`} style={{ width: '100%', height: '60%' }} />
              <div>
                <h2 style={{ marginLeft: '0', fontSize: '24px', marginTop: '15px'   }}>Model</h2>
                <p style={{ marginLeft: '0', fontSize: '20px', marginTop: '5px', color: 'gray' }}>{modelName}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
            <ReadMoreButton title={'Contact Us'}/>
          </div>

      </header>
      <Footer />
    </div>


  );
}

export default PrivacyGardenGates;
