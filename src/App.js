import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display/Display.js";
import Field from "./components/Field/Field.js";

const App = () => (
  <div className='container-fluid main'>
  <Display />
  <Field />
  </div>
);

export default App;
