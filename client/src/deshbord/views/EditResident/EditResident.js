import React from "react";
import EditResidentModel from './EditResidentModel'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  CardFooter
} from "reactstrap";
import { useEffect , useState } from "react";
import Axios from "axios";

const EditFlight =()=>{
    const [residents , setResidents]=useState([])
    useEffect(()=>{
      Axios.get('http://localhost:5000/all-residents')
      .then(resident=>{
        setResidents(resident.data.residents)
      })
      .catch(err=>{
        console.log(err)
      })
    } , [])
   const deleteHandler=(id)=>{
      Axios.get('http://localhost:5000/delete-residents/'+id)
      .then(res=>{
        window.location.href='/admin/all-resident'
      })
    }
    const sort=(event)=>{
      console.log(event.target.value)
      if(event.target.value==='Sort By Assending'){
        Axios.get('http://localhost:5000/assending')
        .then(res=>{
          setResidents(res.data)
        })
      }
      if(event.target.value==='Sort By Dessending'){
        Axios.get('http://localhost:5000/dessending')
        .then(res=>{
          setResidents(res.data)
        })
      }
      if(event.target.value==='No Sort'){
        
        Axios.get('http://localhost:5000/all-residents')
        .then(resident=>{
          setResidents(resident.data.residents)
        })
        .catch(err=>{
          console.log(err)
        })
      }      
    }
    const search=(event)=>{
      console.log('searching')
      Axios.post('http://localhost:5000/search',{text:event.target.value})
      .then(resident=>{
        setResidents(resident.data)
      })
      .catch(err=>{
        console.log(err)
      })

    }
    return (
      <>
        <div className="content">
         
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="internationalFlight">
                    <div className='d-flex'>
                      <h1 style={{color:"#3578E5", textTransform:"capitalize", fontWeight:"600"}}>Edit Residents <span style={{fontSize:"14px"}}>( All )</span></h1>
                      <div className="d-flex">
                        <select onChange={sort} style={{fontSize:'15px', color:'white',fontWeight:'500', marginLeft:'30px'}} className="form-control">
                          <option style={{color:'black'}}>Select a option to sort</option>
                          <option style={{color:'black'}}>Sort By Assending</option>
                          <option style={{color:'black'}}>Sort By Dessending</option>
                          <option style={{color:'black'}}>No Sort</option>
                        </select>
                      </div>
                      <div>
                        <input className="form-control ml-5" style={{fontSize:'15px', color:'white',fontWeight:'500', marginLeft:'30px',minWidth:'360px'}} placeholder="Search by Name, Address, Gender, Patient status " onChange={search}/>
                      </div>
                    </div>
                    <Table className="tablesorter  pb-5 mb-5" responsive>
                      <thead className="text-success">
                        <tr>
                          <th>Name</th>
                          <th>Email </th>
                          <th>Phone tailNumber  </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>    
                        {residents.length<1?
                        <h1 className="text-center text-danger">Not Existing</h1>:''
                        }
                        {residents.map((single)=>{
                       return(
                         
                          <tr>
                            <td> {single.name} </td>
                            <td > {single.email} </td>
                            <td > {single.phoneNumber} </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="success" size="sm">Action</Button>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#3578E5" }}>
                                  <span  class="dropdown-item " style={{color:"white"}}>
                                    <EditResidentModel   resident={single}/>
                                  </span>
                                  <a onClick={()=>deleteHandler( single._id)} class="dropdown-item  "style={{color:"white" , fontSize:"18px"}} href="#">
                                    Delete
                                  </a>
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
      </>
    );
}

export default EditFlight;
