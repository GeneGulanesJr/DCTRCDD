import React, { PureComponent } from 'react'
import axios from 'axios'
import {Card, CardHeader, CardTitle, CardBody, Input, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class LoginPage extends PureComponent {
  state={
    email:'',
    password:'',
    error:{}
  }
  changeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler= ()=>{
    let obj= {
      email:this.state.email,
      password:this.state.password,
    }
    axios.post('http://localhost:5000/login-user' ,  obj)
    .then(res=>{
      console.log(res)
      localStorage.setItem('resident-token' , res.data.token)
      window.location.href='/admin/add-resident'
    })
    .catch(err=>{
      console.log(err)
      this.setState({
        error:{...err.response.data}
      })
      console.log(this.state)
    })
  }
  render() {
    return (
      <div className="col-md-6 offset-md-3 mt-5">
        <Card>
          <CardHeader>
            <CardTitle>
              <h3>Log in  Page</h3>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <label>Enter Email</label>
            <Input
              name="email"
              value={this.state.email}
              type="email"
              placeholder="Enter your email "
              onChange={this.changeHandler}
            />
            
            {this.state.error.email?
             <p className="text-danger">  {this.state.error.email} </p>:''
             } 
            <label>Enter Password</label>
            <Input
              name="password"
              value={this.state.password}
              type="password"
              placeholder="Enter your password "
              onChange={this.changeHandler}
            />
            
            {this.state.error.password?
             <p className="text-danger">  {this.state.error.password} </p>:''
             }
             {this.state.error.massage?
              <p className="text-danger">  {this.state.error.massage} </p>:''
              }
          </CardBody>
          <CardFooter>
            <button onClick={this.submitHandler} className="btn btn-success">Sign in</button>
            <p>Not registered yet  account ? Go to  <Link to='/register-page'> Register page</Link>  </p>
          </CardFooter>
        </Card>
      </div>
    )
  }
}
