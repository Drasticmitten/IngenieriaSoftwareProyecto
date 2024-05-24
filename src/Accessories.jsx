import React from 'react';
import './styles/Options.css';

function OptionAccesories() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
                    <a style={{ fontWeight: 'bold', color: 'black' }}>Gate Accessories</a>
                    <a style={{ color: 'grey' }} href='/Cantilever-Wheels'>Cantilever Wheels</a>
                    <a style={{ color: 'grey' }} href='/Locks-Latches'>Locks - Latches</a>
                </div>
        </div>
    );
}

export default OptionAccesories;
