import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import './style.css'
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Altcategorygoster from './components/Altcategory';
import AddProducts from "./components/addProducts";
import Details from './components/ProductDetail';
import Favorite from './components/Faveriteproduct';
import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));

const Index = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signIn' element={<SignIn/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/addProducts' element={<AddProducts/>}/>
                    <Route path='/favorites' element={<Favorite/>}/>
                    <Route path='/Altcategorygoster/:id' element={<Altcategorygoster/>}/>
                    <Route path= '/Details/:id' element={<Details/>} />
                </Routes>
            </Router>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store} ><Index/></Provider>);