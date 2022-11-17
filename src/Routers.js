import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main.js';
import MyNote from './page/MyNote.js';
import Header from './containers/Header.js'

function Routers() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/myNote' element={<MyNote />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Routers;