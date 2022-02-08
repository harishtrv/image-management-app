import React from 'react';
import Home from './components/Home';
import AddModal from './components/AddModal';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (<div className='container1'>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<AddModal />} />
      </Routes>
    </Router>
    </div>);
}

export default App;
