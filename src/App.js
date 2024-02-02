import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom'

import Login from './components/login';
import Signup from './components/signup';


import { useSelector } from 'react-redux';

function App() {
 const {user} = useSelector((state) => state.auth)

  return (
    <div>
     
      <Routes>
       
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
       
      </Routes>
      
    </div>
  );
}

export default App;