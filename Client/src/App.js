import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import AddEmployee from './components/Add_Employee/Add_Employee';
import Edit from './components/Edit/Edit';
import Search from './components/Search/Search';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/add_employee' element={<AddEmployee />} />
          <Route exact path='/edit' element={<Edit />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
      </Router>
    </main>
  );

}
export default App;