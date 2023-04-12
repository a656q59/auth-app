import React,{useContext} from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from "../AuthContext";


const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error)
        });
    }

    if(!user){
        return <Navigate replace to="/login"/>
    }
   
    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home;