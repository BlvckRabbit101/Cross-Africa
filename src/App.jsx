import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import facebook from "./assets/images/facebook.svg"
import twitter from './assets//images/twitter.svg'
import instagram from './assets//images/instagram.svg'
import google from './assets//images/google.svg'
import logo from './assets//images/logo.png'
import help from './assets//images/help.svg'
import cart from './assets//images/cart.svg'
import dropdown from './assets//images/drop-down.svg'
import burger from './assets//images/burger.svg'
import search from './assets//images/search.svg'

const App = () => {
  return (
  
    <div className="container">
      <header className="header">
        <div className="logo-hold">
          <img className='logomage' src={logo} />
          <h1>Cross Africa</h1>
        </div>
        <div className='navs'>
          <nav className='navi'>Categories<img className='head-icon' src={dropdown} /></nav>
          <div className="search-hold">
            <input placeholder='Search by name or brand' type="text" className="search" />
            <button className="search-btn"><img className='head-icon' src={search} /></button>
          </div>
          <nav className='navi'>Account<img className='head-icon' src={dropdown} /></nav>
          <nav className='navi'>Cart<img className='head-icon' src={cart} /></nav>
          <nav className='navi'>Help<img className='head-icon' src={help} /></nav>
          <img className='head-icon' src={burger} />
        </div>
      </header>
      <div className="hero-title">
      <p>Buying & Selling made easy across Africa!</p>
      </div>
      <div className="hero">
        <div className="card-holder">
          <div className="card">
            <h1>Electronics</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, libero iste?</p>
            <button className='button'>Buy Now</button>
          </div>
          <div className="card2">
            <h1>Mobile Phones</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptatibus!</p>
            <button className='button'>Buy Now</button>
          </div>
        </div>
        <div className="card-holder">
          <div className="card3">
            <h1>Clothing & Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis voluptatem earum ipsam dolorum.</p>
            <button className='button'>Buy Now</button>
          </div>
          <div className="card4">
            <h1>Food & Groceries</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum amet mollitia, deserunt rem ex.</p>
            <button className='button'>Buy Now</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-hold1">
          <div className="foot-title">Categories</div>
          <div className="foot-navs">
            <div className="nav">Home Appliances & Furniture</div>
            <div className="nav">Food Items</div>
          </div>
        </div>  
        <div className="footer-hold">
          <div className="foot-title">Important Links</div>
          <div className="foot-navs">
            <div className="nav">Terms & Conditions</div>
            <div className="nav">Return & Exchange</div>
            <div className="nav">Shipping & Deliveries</div>
            <div className="nav">Privacy Policy</div>
          </div>
        </div>
        <div className="footer-hold2">
          <div className="foot-title">Information</div>
          <div className="foot-navs">
            <div className="nav">About Us</div>
            <div className="nav">Contact Us</div>
            <div className="nav">Blog</div>
            <div className="nav">Stories</div>
            <div className="nav">FAQ</div>
          </div>
        </div>
        <div className="footer-hold2">
          <div className="foot-title">Socials</div>
          <div className="foot-navs">
            <div className="navy"><img className='social-icon' src={facebook} />Facebook</div>
            <div className="navy"><img className='social-icon' src={twitter} />Twitter</div>
            <div className="navy"><img className='social-icon' src={instagram} />Instagram</div>
          </div>
        </div>
        <div className="footer-hold">
          <div className="foot-title">Download</div>
          <div className="foot-navs">
            <button className="play">
              <div className="play-left"><img className='social-icon1' src={google} /></div>
              <div className="play-right">
                <div className="top">Download On</div>
                <div className="btm">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
