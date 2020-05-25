import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from 'react-router-dom';


export default function Nav() {
    return (
        <div>
            <Router>
                <NavLink to="#">Resume</NavLink> | 
                <NavLink to="#history"> Work</NavLink> | 
                <NavLink to="#myprojects"> Projects</NavLink> | 
                <NavLink to="#background"> Background</NavLink>
            </Router>
        </div>
    )
}
