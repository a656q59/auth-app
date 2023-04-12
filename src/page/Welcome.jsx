import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Welcome;