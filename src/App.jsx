import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import { Todos } from './pages/Todos/Todos';
import { Login } from './pages/Authorization/Login';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}
export default App
