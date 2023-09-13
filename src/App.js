import React from 'react'
import './App.css';
import Home from './Page/Home'
import Cards from './Page/Cards'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#">ritika</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link   text-white mx-2" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link   text-white mx-2" to="Cards">Cards</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>

        <Routes>
          <Route exact path='/' element={<Home />}  ></Route>
          <Route path='Cards' element={<Cards />}  ></Route>
        </Routes>
      </div>


      <div className="footer">
        <div className="xyz">
          <div className="round">

            <h3>CATEGORIES</h3>
            <ul>
              <li><a href="">Women</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Shoes</a></li>
              <li><a href="">Watches</a></li>
            </ul>
          </div>

          <div className="round">
            <h3>HELP</h3>
            <ul>
              <li><a href="">Track order</a></li>
              <li><a href="">Return</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">FAQ's</a></li>
            </ul>
          </div>

          <div className="round">
            <h3>GET IN TOUCH</h3>
            <p>
              Any questions? Let us know in store at 8th
              floor, 379 Hudson St, New York, NY 10018 or
              call us on (+1) 96 716 6879
            </p>
            <div className="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
          </div>

          <div className="round">
            <h3>NEWSLETTER</h3>
            <input type="text" placeholder='email@example.com' />
            <button type="button" class="btn btn-primary button">Subscribe</button>
          </div>
        </div>
      </div>
    </Router>



  );
}


//heart shape pe hover dena hai so it only change color of heart

// Products IMG me dusri img set krne pe uski height change ho gyi hai aur kuch k  backgrounds nhi aa rhe

// agar ye sab mujhe cards me daalna ho to kaise hoga

//overflow hidden nhi ho raha 

// Ispe bhi media query lagani hogi kya ?

//Subscibe button centre me karna hai

// https://ritika-abc.github.io/   Ispe wo Php wala kaise banega 

export default App;