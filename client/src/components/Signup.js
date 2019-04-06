import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {registerUser } from '../actions/authAction';
import authReducer from '../reducers/authReducer';
// Common Components
import TextFieldGroup from './common/TextFieldGroup';
class Signup extends Component {
 constructor(){
     super();
     this.state = {
         name: '',
         email: '',
         password1: '',
         password2: '',
         errors: {}
     }
 }
 submit = (e) =>{
     e.preventDefault();
     let data = {};
     data.name = document.getElementById('name_in').value;
     data.email = document.getElementById('email_in').value;
     data.password1 = document.getElementById('password1_in').value;
     data.password2 = document.getElementById('password2_in').value;
     this.props.registerUser(data, this.props.history);
 }
 componentDidMount(){
  if(this.props.auth.isAuthenticated)
     this.props.history.push('/papers');
}
 componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
    }
}
  render() {
    return (
        <form className='container'
        style={{
          minHeight: '83.5vh'
        }} onSubmit={this.submit}>
        <TextFieldGroup 
        label='name'
        type='text'
        errors={this.state.errors}
        id='name_in'
        placeholder='Enter Name'
        name='name'
        value={this.state.name}
        />
        <TextFieldGroup
        label='email address'
        type='text'
        errors={this.state.errors}
        id='email_in'
        placeholder='Enter email'
        name='email'
        value={this.state.email}
        />
        <TextFieldGroup
        label='password'
        type='password'
        errors={this.state.errors}
        id='password1_in'
        placeholder='Enter Password'
        value={this.state.password1}
        name='password1'
        />
        <TextFieldGroup
        label='confirm password'
        type='password'
        errors={this.state.errors}
        name='password2'
        placeholder='Confirm Password'
        id='password2_in'
        value={this.state.password2}
        />
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    )
  }
}
const mapStatetoProps = state => (
  {
    auth: state.auth,
    errors: state.errors
  }
)
export default connect(mapStatetoProps, {registerUser})(withRouter(Signup));
