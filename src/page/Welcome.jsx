import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
    return (
        <div>
           <div> <Link to="/signup">Sign Up</Link></div>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Welcome;