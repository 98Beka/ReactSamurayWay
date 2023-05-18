import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />
        </Routes>
          {/* <Dialogs/> */}

        </div>
        {/* <Profile/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
