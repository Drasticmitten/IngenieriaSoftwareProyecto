import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CardContainer from './CardContainer';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import './styles/Home.css';

function Home() {
  return (
    <div className="App">
      <Navbar /> {/* Usar el componente Navbar */}
      <header className="App-header" style={{marginTop: '100px'}}>
        <h1>
          Design the Perfect <br />
          Entrance to your Home
        </h1>
        <p className="text-secondary fs-5">
          We offer you custom ornamental decorative entry doors while providing <br />
          safety, security and convenience.
        </p>
        <ReadMoreButton title={'Read More'}/>
        <br />
        <img
        src="/house.jpeg"
        alt="house"
        className="mt-4"
        />
        <h2>Why Choose Custom Aluminum Driveway Gates?</h2>
        <p className='text-secondary'>At Gates N Fences, we specialize in crafting beautiful and long-lasting custom aluminum <br />
driveway gates. Here's why they might be the perfect choice for your home:</p>
      </header>
      <CardContainer/> <br />
      <h2>Some of our work</h2>
      <img src="/examples1.jpeg" width={'100%'} alt="examples" />
      <Footer />
    </div>
  );
}

export default Home;
