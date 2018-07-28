import React   from 'react';
import Ionicon from 'react-ionicons';
import './menuCard.css';

export function MenuCard(props) {
    const styleSection = {
        backgroundImage : 'url(' + props.backgroundImage + ')'
    }

    return (
        <div
            className={'menu-card col s12 m' + props.size}
            style={styleSection}>
            <div className="content">
                <Ionicon icon={props.icon} fontSize="50px" color="white" />
                <h5 className="title">{props.title}</h5>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </div>
    );
}
