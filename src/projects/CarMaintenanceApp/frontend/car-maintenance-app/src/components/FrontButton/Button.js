import React from 'react';
import './Button.css';

const Button = ({ children, onClick}) => (
    <button className='App-button' onClick={onClick}>
        {children}
    </button>
);

export default Button;
