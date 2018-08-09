import React from 'react';
import './menuLayout.css';
import { withRouter } from 'react-router'

class MenuLayout extends React.Component {

    render() {
        let isActive = this.props.history.location.pathname !== '/';

        return (
            <div className={'menu-layout fit-parent row ' + (isActive ? 'active' : '')}>
                {this.props.children}
            </div>
        );
    }

}

export default withRouter(MenuLayout);