import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import React,{ useEffect } from 'react';
import { auth } from "./firebase";
import { useDispatch, useSelector, } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";


import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import LoginScreen from './components/LoginScreen';


function App() {
    
    const user= useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
         console.log(userAuth);
          if(userAuth){
           dispatch(login({
               uid: userAuth.uid,
               email: userAuth.email,
               
           }));
          }else{
            dispatch(logout());
          }
      })
      return unsubscribe;
    },[dispatch]);
    return (
        
       
            <BrowserRouter>
            {!user ? (
                <LoginScreen/>
            ): (
                <Route render={props => (
                    <>
                        <Header {...props}/>
                        <Routes/>
                        <Footer/>
                    </>
                )}/>
            )}
          
        </BrowserRouter>
        
           
    );
}

export default App;
