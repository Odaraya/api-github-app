import React from 'react';
import SearchIcon from '../../../assets/icons/search-icon.svg';
import './button.css';

const Button = ({onClick}) => {
    return(
        <div className="btn--container">
            <img src={SearchIcon} onClick={onClick} alt="Buscar-icone de lupa"></img>
        </div>
    );
}
export default Button;

