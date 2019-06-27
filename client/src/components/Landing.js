import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './css/landing.css';
class Landing extends Component{
  render(){
    return (
      <div className='landing'
      style={{
        minHeight: '86vh',
        background: `url(${require('./images/connection.jpg')})`
      }}>
        <div 
        className='landing-layout text-center text-white'>
          <div 
          className='container'
          style={{
            margin: '110px auto'
          }}>
            <h1 
            style={{
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: '3px',
              fontSize: '70px'
            }}
            className='text-uppercase'>Developer Connect Website</h1>
            <p 
            style={{
              fontWeight: 'bold'
            }}
            className='lead bg-dark p-2'>You can create you own profile and other developers see it also you can create you own posts and comments</p>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>(
  {
    auth: state.auth
  }
)
export default  connect(mapStateToProps)(Landing);
