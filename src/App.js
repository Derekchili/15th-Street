import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Nav from './components/Nav';
import NavTabs from './NavTabs';


function App() {
  return (
    <div className='flex flex-col sm:w-16 md:w-32 lg:w-48 px-5'>
    <BrowserRouter>
    <header className='h-20 justify-center m4 bg-gradient-to-r from-blue-500 to-grey-900'>         
          <NavTabs />
        </header>
        <main className='h-full'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:id" element={<Post />} />
        <Route exact path="/nav" element={<Nav />} />
      </Routes>
      </main>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
