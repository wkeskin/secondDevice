/* 
File Name: App.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainRouter from '../MainRouter';
import './App.css'



function App() {
  return (
    <div id ='root'>
    <Router>
      <MainRouter/>
    </Router>
    <footer id='footer'>Copyright © Wardatul Keskin, 301294696, COMP 229 - Web Application Development, Fall 2024</footer><br/>
    </div>
  )
}

export default App;