import React, { PureComponent } from 'react'
import axios from 'axios'
import {Card, CardHeader, CardTitle, CardBody, Input, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class RegisterPage extends PureComponent {
  state={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    error:{}
  }
  changeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler= ()=>{
    let obj= {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      confirmPassword:this.state.confirmPassword
    }
    axios.post('http://localhost:5000/register-user' ,  obj)
    .then(user=>{
      window.location.href='/login'
    })
    .catch(err=>{
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
              <h3>Register Page</h3>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <label>Enter Name</label>
            <Input
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Enter your name "
              onChange={this.changeHandler}
            />
             {this.state.error.name?
             <p className="text-danger">  {this.state.error.name} </p>:''
             } 
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
            <label> Enter Confirm Password</label>
            <Input
              name="confirmPassword"
              value={this.state.confirmPassword}
              type="password"
              placeholder="Enter confirm password "
              onChange={this.changeHandler}
            />
            
            {this.state.error.confirmPassword?
             <p className="text-danger">  {this.state.error.confirmPassword} </p>:''
             }
          </CardBody>
          <CardFooter>
            <button onClick={this.submitHandler} className="btn btn-success">Sign up</button>
            <p>Already have account ? Go to  <Link to='/login'> Login page</Link>  </p>
          </CardFooter>
        </Card>
      </div>
    )
  }
}
