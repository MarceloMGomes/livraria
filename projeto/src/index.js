import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Delete from './pages/delete';
import Post from './pages/post';
import Put from './pages/put';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/put' element={<Put/>}/>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);