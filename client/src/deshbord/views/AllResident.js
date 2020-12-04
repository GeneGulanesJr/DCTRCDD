import React from 'react'
import { Card, CardBody , FormGroup ,Table, Col, Row, Form, Input, Button ,  } from 'reactstrap'
import { useState } from 'react'
import Axios from 'axios'

class GenereateInvoice extends React.Component{

  constructor(){
    super()
    this.state={
      startDate:'',
      endDate:'',
      operator:'',
      allResident:[],
      err:{}
    }
    this.onchangeHandler=this.onchangeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  deleteHandler=(id)=>{
    Axios.get('http://localhost:5000/api/delete-invoice/'+id)
    .then(done=>{
      console.log('done')
      window.location.href="/admin/invoice-generator"
    })
    .catch(err=>{
      console.log(err)
    })
  }
  onchangeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  submitHandler =(event)=>{
    event.preventDefault()
    let obj={
      endDate:this.state.endDate,
      startDate:this.state.startDate,
      operator:this.state.operator
    }
    Axios.post('http://localhost:5000/api/create-invoice' , obj )
    .then(invoice=>{
      this.setState({
        startDate:'',
        endDate:'',
        operator:'',
      })
      console.log(invoice.data)
      window.location.href=('/admin/invoice-generator')
    })
    .catch(err=>{
      console.log(err.response.data)
      
      
      this.setState({
        err:err.response.data
      })
      console.log(this.state)
    })
    console.log(this.state)
  }
  
  componentDidMount(){
    Axios.get('http://localhost:5000/all-residents')

    .then(res=>{
      console.log(res.data.residents)
      this.setState({
        allResident:res.data.residents
      })
    })
    console.log(this.state.allResident)
  }
    render(){
    return (
        <>
        <div className="content mt-5">
          <div className="col-md-8 offset-md-2 mt-5">
          <Row>
            <Col md="12" className="mt-5">
              <Card>
                <CardBody>
                  <div className="internationalFlight">
                    <div>
                      <h1 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}>Generated Invoice <span style={{fontSize:"14px"}}>( All )</span></h1>
                    </div>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Email </th>
                          <th>Phone  </th>
                          <th>Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.allResident.map((single, index)=>{
                       return(
                          <tr>
                            <td> {single.name} </td>
                            <td > {single.email} </td>
                            <td > {single.phoneNumber} </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="success" size="sm">Action</Button>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#3578E5" }}>
                                  < p onClick={this.deleteHandler.bind(this, single._id)} style={{fontSize:"18px" , padding:"7px", cursor:"pointer"}}>
                                  Delete
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr> 
                       )
                        })}
                        <div className="p-5"></div>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Row>
            </div>
        </div>
        </>
    )
  }
}
export default GenereateInvoice