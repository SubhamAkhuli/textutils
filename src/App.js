import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" about="About" />
      <Routes>
        <Route path="/" element={<>
          <Body heading="Enter the text below" />
        </>} />
        <Route path="/about" element={<>
          <About />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
