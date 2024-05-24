// src/components/Footer.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './styles/Footer.css';

function Footer() {
    return (
      
      <footer className="bg-white text-dark py-4" style={{ marginTop: '100px', marginBottom: '40px' }}>
        <hr />
        <div className="container" style={{marginTop: '100px'}}>
          <div className="row">
            <div className="col-md-6">
              <h5>GATESNFENCES</h5>
            </div>
            <div className="col-md-6 text-right">
              <div className="row">
                <div className="col-4">
                  <ul className="list-unstyled">
                    <li><a href="#link1" className="text-dark">About Us</a></li>
                    <li className="footer-link"><a href="#link2" className="text-dark">FAQ</a></li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="list-unstyled">
                    <li><a href="/Contact-Us" className="text-dark">Contact Us</a></li>
                    <li className="footer-link"><a href="#link4" className="text-dark">Manufactures</a></li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="list-unstyled">
                    <li><a href="#link5" className="text-dark" style={{textDecoration: 'none'}}>Our Policies</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;

