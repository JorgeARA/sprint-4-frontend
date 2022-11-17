import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebaseApp from './firebase-config';
import  { getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Home } from './Home/Home';
import { Register } from './Register/Register';
import { Dishes } from './Dishes/Dishes';
import { UserProfile } from './UserProfile/UserProfile';
import { RestaurantList } from './Restaurant/RestaurantList';
import { RestaurantListHeader } from './Restaurant/RestaurantListHeader';
import { AuthProvider } from '../context/firebaseContext';
import { ProtectedRoute } from './Generic/ProtectedRoute';
import Verification from './Verification/Verification';


//const auth = getAuth(firebaseApp);

function App() {
    const [ usuarioGlobal, setUsuarioGlobal ] = useState(null);

    return <>{
            <AuthProvider>
              <Routes>
                  <Route path="/" element={
                    <ProtectedRoute><Home /></ProtectedRoute>
                  } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/verification" element={<Verification />} />
                  <Route path="/userprofile" element={
                    <ProtectedRoute><UserProfile /></ProtectedRoute>
                  } /> 
                  <Route path="/restaurantlistheader" element={
                    <ProtectedRoute><RestaurantListHeader /></ProtectedRoute> 
                  } />       
                  <Route path="/restaurantlist" element={
                    <ProtectedRoute><RestaurantList /></ProtectedRoute>
                  } /> 
                  <Route path="/dishes" element={
                    <ProtectedRoute><Dishes /></ProtectedRoute> 
                  } /> 

              </Routes>
            </AuthProvider> 
    }</> 
}

export default App
