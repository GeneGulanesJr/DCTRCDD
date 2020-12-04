import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import RegisterPage from "views/examples/RegisterPage.jsx";
import LoginPage from 'views/examples/loginPage.jsx'



import { createBrowserHistory } from "history";
import AdminLayout from "./deshbord/layouts/Admin/Admin";


import "./deshbord/assets/scss/black-dashboard-react.scss";
import "./deshbord/assets/demo/demo.css";
import "./deshbord/assets/css/nucleo-icons.css";
import './app.css'
import { useEffect } from "react";

class App extends React.Component{
  componentDidMount(){
    
  }
  render(){
  return(
  <BrowserRouter>
    <Switch>
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/login-page" />
    </Switch>
  </BrowserRouter>
  )
  }
}


export default App