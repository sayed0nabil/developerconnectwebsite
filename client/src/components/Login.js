import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authAction';
class Login extends Component {
 constructor(){
     super();
     this.state = {
         email: '',
         password: '',
         errors: {}
     }
 }
 submit = (e) =>{
     e.preventDefault();
     let userData = {};
     userData.email = document.getElementById('email_in').value;
     userData.password = document.getElementById('password_in').value;
     this.props.loginUser(userData);
 }
 componentDidMount(){
   if(this.props.auth.isAuthenticated)
      this.props.history.push('/dashboard');
 }
 componentWillReceiveProps(nextProps){
   if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard');
   }
   if(nextProps.errors){
     this.setState({
       errors: nextProps.errors
     })
   }
 }
  render() {
    const { errors } = this.state;
    return (
        <div className='custom-container'
        style={{
          minHeight: '86vh'
        }}>
        <form className='w-50 mx-auto' onSubmit={this.submit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
          type="email" 
          className={classnames("form-control", {
            "is-invalid": errors.email
          })}
          id="email_in" 
          aria-describedby="emailHelp" 
          placeholder="Enter email"
          defaultValue={this.state.email}
           />
          {errors.email?(
            <small id="emailHelp" className="form-text text-danger">{errors.email}</small>
          ): null}
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input 
          type="password" 
          className= {classnames("form-control", {
            "is-invalid": errors.password
          })}
          id="password_in" 
          placeholder="Enter Password"
          defaultValue={this.state.password1}
           />
           {errors.password?(
             <small id="emailHelp" className="form-text text-danger">{errors.password}</small>
           ):null}
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      </div>
    )
  }
}
const mapStatetoProps = (state) =>(
  {
    auth  : state.auth,
    errors: state.errors
  }
)
export default connect(mapStatetoProps, { loginUser })(Login)
