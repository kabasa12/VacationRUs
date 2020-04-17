import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    props.show ? <ul className="NavigationItems" onClick={props.clicked}>  
                    <NavigationItem link="/" exact>Home</NavigationItem>
                    <NavigationItem link="/newVacation">New</NavigationItem>
                    <NavigationItem link="/editVacations">Edit</NavigationItem>
                </ul> : null
);

export default navigationItems;