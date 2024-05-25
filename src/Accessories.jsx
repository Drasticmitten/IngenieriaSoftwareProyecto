import React from 'react';
import './styles/Options.css';

function OptionAccesories() {
    // Example function to handle what happens when non-link actions are needed
    const handleAction = (accessory) => {
        console.log(`Selected accessory: ${accessory}`);
        // Add functionality as needed
    }

    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
                <button 
                    style={{ fontWeight: 'bold', color: 'black', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                    onClick={() => handleAction('Gate Accessories')}
                >
                    Gate Accessories
                </button>
                <a style={{ color: 'grey' }} href='/Cantilever-Wheels'>Cantilever Wheels</a>
                <a style={{ color: 'grey' }} href='/Locks-Latches'>Locks - Latches</a>
            </div>
        </div>
    );
}

export default OptionAccesories;
