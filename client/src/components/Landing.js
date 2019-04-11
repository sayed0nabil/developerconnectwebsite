import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './css/landing.css';
class Landing extends Component{
  componentDidMount(){
    if(this.props.auth.isAuthenticated)
       this.props.history.push('/papers');
  }
  render(){
    return (
      <div className='landing'
      style={{
        minHeight: '86vh'
      }}>
        <div 
        className='landing-layout text-primary'>
          Developer Connection Website
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
