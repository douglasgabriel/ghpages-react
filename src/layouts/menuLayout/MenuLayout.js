import React from 'react';
import './menuLayout.css';

export function MenuLayout(props) {
    return (
        <div className="menu-layout fit-parent row">
            {props.children}
        </div>
    );
}
