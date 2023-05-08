import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { Homepage } from './../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>} /> 
        <Route path='/loginadmin' element={''} />
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/admin' element={''}/>
    </Routes>
    </div>
  )
}

export default MainRoutes


