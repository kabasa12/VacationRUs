import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className="NavigationItems" onClick={props.clicked}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        {(props.isAdminAuth) ? 
          <NavigationItem link="/newVacation">New</NavigationItem>: null}
        {(props.isAdminAuth) ? 
          <NavigationItem link="/editVacations">Edit</NavigationItem>: null}
        {(props.isAdminAuth) ? 
          <NavigationItem link="/statistics">Graphs</NavigationItem>: null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;