import * as React from "react";
import { Component } from 'react';
import * as logo from '../../logo.svg';
import Main from '../Main/Main'
import Header from '../Header/Header'
import Demo from '../AppBar/appBar'
import './App.scss';

const App = () => (
    <div>
        <Demo />
        <Header />
        <Main />
        
    </div>
  )

export default App
