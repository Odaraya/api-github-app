import React from 'react';
import Search from '../../molecula/Search/Search';
import './searchbar.css';


const Searchbar= ({
placeholder,
type,
value,
onChange,
onClick
}) => {
    return(
        <div className='searchBar--container'>
            <Search
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onClick={onClick}
            />
        </div>
    );
};
export default Searchbar;

