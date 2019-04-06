import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import './App.css';
// Custom components
import store  from './store';
import Navbar from './components/Navbar';
import Landing   from './components/Landing';
import Signup from './components/Signup';
import Login  from './components/Login';
import Profiles  from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Dashboard  from './components/dashboard/Dashboard';
import CreateProfile from './components/CreateProfile';
import Posts from './components/post/Posts';
import PostForm from './components/post/PostForm';
import Footer from './components/Footer';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';
import { logoutUser } from './actions/authAction';
import PrivateRoute from './components/common/PrivateRoute';
import EditProfile from './components/editprofile/EditProfile';
import AddExperience from './components/addcredentials/AddExperience';
import AddEducation from './components/addcredentials/AddEducation';
if(localStorage.jwttoken){
  setAuthToken(localStorage.jwttoken);
  const decoded = jwt_decode(localStorage.jwttoken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
          <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing}      /> 
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profiles' component={Profiles} />
            <Route exact path='/profile/:handle' component={Profile} />
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/createprofile' component={CreateProfile} />
              <PrivateRoute exact path='/editprofile' component={EditProfile} />
              <PrivateRoute exact path='/addexperience' component={AddExperience} />
              <PrivateRoute exact path='/addeducation' component={AddEducation} />
              <PrivateRoute exact path='/addpost' component={PostForm} />
              <PrivateRoute exact path='/posts' component={Posts} />
            </Switch>
          </Switch>
          <Footer />
          </React.Fragment>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;