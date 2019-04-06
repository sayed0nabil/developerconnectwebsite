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
        <div className='landing-layout'>
          <h2 className='text-center text-white mt-5'>Developer Connection Website</h2>  
          <div className='btns text-center'>
              <button className='mr-5 btn btn-primary mt-5'><Link className='text-white' to='/login'>Login</Link></button>
              <button className="ml-5 btn btn-success mt-5"><Link className='text-white' to='/signup'>Signup</Link></button>
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
