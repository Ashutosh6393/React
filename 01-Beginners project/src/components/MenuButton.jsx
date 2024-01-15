import React from 'react';

const MenuButton = ({children, onSelect , isSelected}) => {
    return (
        <button className={isSelected ?"active" : ""} onClick={onSelect}>
            {children}
        </button>
    );
}

export default MenuButton;
