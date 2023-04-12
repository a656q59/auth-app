import './App.css';
import Home from './page/Home.jsx';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import { AuthProvider } from "./AuthProvider";


function App() {
  return (
    <Router>
    <div>
      <section>  
      <AuthProvider>                            
          <Routes>    
             <Route path="/" element={<Home/>}/>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/home" element={<Home/>}/>
          </Routes>    
        </AuthProvider>                
      </section>
    </div>
  </Router>
  );
}

export default App;
