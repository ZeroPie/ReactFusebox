import * as React from "react";
import { Component } from 'react';
import * as logo from '../../logo.svg';
import Main from '../Main/Main'
import Header from '../Header/Header'
import Demo from '../FloatingButton/floatingButton'
import './App.scss';

const App = () => (
    <div>
        <Header />
        <Main />
        <Demo />
    </div>
  )
  
export default App
