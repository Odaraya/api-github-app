import React from 'react';
import Input from '../../atomo/input/input';
import Button from '../../atomo/Button/Button';
import './search.css';


 const Search = ({ placeholder, type, value, onChange, onClick
}) => {
    
    return(
        <div className="search--component">
            <Input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange ={onChange}
                />
                <Button 
                onClick={onClick} 
                />
                
                
               
        </div>
    )
};

export default Search;

// classinput={classinput}
// changeuser={changeuser}
// buttonaction={buttonaction};