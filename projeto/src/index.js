import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Post from './pages/post';
import Put from './pages/put';
import Get from './pages/Get'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/post' element={<Post/>}/>
          <Route path='/put/:id' element={<Put/>}/>
          <Route path='/get' element={<Get/>}/>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);