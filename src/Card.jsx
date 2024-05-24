import React from 'react';

function Card({ index, text, imgSrc }) {
  return (
    <div className="card text-center" style={{ width: '22rem', height: '30rem', padding: '30px', marginLeft: '8rem'}}>
      <img src={imgSrc} className="card-img-top"/>
      <div className="card-body" style={{display: 'flex', alignContent: 'center'}}>
        {index===1 ? 
              <div style={{ fontSize: '40px', textAlign: 'center', margin: 'auto' }}>
                <p><b> Strength </b></p>
                <p style={{fontFamily: 'mono', fontSize: '50px'}}> Beauty </p>
                <p><b> Value </b></p>
              </div>
                :
                <p className="card-text" dangerouslySetInnerHTML={{ __html: text }} style={{ fontSize: '20px', textAlign: 'center', margin: 'auto' }}></p>
              }
      </div>
    </div>
  );
}

export default Card;