// src/components/CardContainer.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from './Card';

function CardContainer() {
    const cardsData = [
      {
        text: 'Unmatched Selection and Customization',
        imgSrc: '/door1.jpeg'
      },
      {
        text: 'Strength<br />Beauty <br />Value',
      },
      {
        text: 'Low-Maintenance Advantage',
        imgSrc: '/tuerca.jpeg'
      }
    ];
  
    return (
      <div className="container mt-4">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className={`col-md-4 text-${index === 1 ? 'center' : 'left'}`} key={index}>
              <Card index={index} text={card.text} imgSrc={card.imgSrc} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CardContainer;
