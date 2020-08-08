import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Teacher from './Teacher'
import Diem from './QuanlyDiem'
import MonHoc from './QuanLyMonHoc'
ReactDOM.render(
  <React.StrictMode><MonHoc /><Diem /><Teacher /></React.StrictMode>,document.getElementById('root')
  
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
