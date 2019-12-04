import React,{Component} from 'react';
import Grid from './Grid';
import Home from './Home/Home';
import '../style/styles.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import $ from 'jquery';
window.jQuery =$;
window.$=$;
global.jQuery=$;

class App extends Component{
  render(){
    return(
      <Router>
        <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light-warna">
            <Link className="navbar-brand" to="#"> <img src={require('../logo/logo.png')} className="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expended="false">
                    Promo
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="">PROMO</Link>
                    <Link class="dropdown-item" to="">PARTNERSHIP</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expended="false">
                    Paket & Add-On
                  </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="">ACTION</Link>
                    <Link className="dropdown-item" to="">Another-Action</Link>
                    <div className="dropdown-divider">
                      
                    </div>
                    
                    <a className="dropdown-item" href="#">Something Else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Pusat Bantuan</Link>
                </li>
              </ul>
            </div>
            </nav>
        </div>
      
      <div className="">
      <Route path="/" exact component={Home}/>
            <Route path="/Grid"  component={Grid}/>
      </div>
      </div>
      </Router>
    )
  }
}     
  

export default App;