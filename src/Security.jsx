import React from 'react';
import './styles/Options.css';

function OptionSecurity() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
            <button 
                    style={{ 
                        fontWeight: 'bold', 
                        color: 'black', 
                        background: 'none', 
                        border: 'none', 
                        padding: 0, 
                        margin: 0, 
                        cursor: 'pointer', 
                        textDecoration: 'underline' 
                    }} 
                >
                    Safety Equipment
                </button>                    <a style={{ color: 'grey' }} href='/Loop'>Safety Loops</a>
                </div>
        </div>
    );
}

export default OptionSecurity;
