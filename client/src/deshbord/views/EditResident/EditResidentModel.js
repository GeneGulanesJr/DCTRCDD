
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
import { useEffect } from 'react';
import Axios from 'axios';
const EditInternationalModal = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [resident, setResident]=useState({...props.resident})


    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    const changeHandler=(event)=>{
      setResident({
        ...resident,
        [event.target.name ]:event.target.value
      })
    }
    const submitHandler= ()=>{
      Axios.post('http://localhost:5000/edit-residents/'+props.resident._id , resident)
      .then(resident=>{
        alert(resident.data.massage)
        window.location.href='/admin/all-resident'
      })
      console.log(resident)
    }

    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <p style={{fontSize:"18px" , color:"white", cursor:"pointer" ,width: "100%",fontSize: "18px" , padding:"15px" , margin:"-15px"}} onClick={toggle}>Edit</p>
            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                  <h3 style={{color:"black"}}>Update Resident </h3>
                <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>name</label>
                          <Input
                            style={{color:"black"}}
                            defaultValue={props.resident.name}
                            name="name"
                            onChange={changeHandler}
                            placeholder="Enter Name "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Date Of Admission</label>
                          <Input
                            defaultValue={props.resident.dateOfAdmission}
                            style={{color:"black"}}
                            name="dateOfAdmission"
                            onChange={changeHandler}
                            placeholder="Enter Date Of Admission"
                            type="date"
                          />
                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Date Of Birth</label>
                          <Input
                            style={{color:"black"}}
                            defaultValue={props.resident.dateOfBirth}
                            name="dateOfBirth"
                            onChange={changeHandler}
                            placeholder="Date Of Birth "
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Cell Phone Number</label>
                          <Input
                            defaultValue={props.resident.cellPhoneNumber}
                            style={{color:"black"}}
                            name="cellPhoneNumber"
                            onChange={changeHandler}
                            placeholder="Enter Cell Phone Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            defaultValue={props.resident.phoneNumber}
                            style={{color:"black"}}
                            name="phoneNumber"
                            onChange={changeHandler}
                            placeholder="phoneNumber"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Guardian Number</label>
                          <Input
                            defaultValue={props.resident.guardianNumber}
                            style={{color:"black"}}
                            name="guardianNumber"
                            onChange={changeHandler}
                            placeholder="Enter Guardian Number"
                          />>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                        <label>Gender</label>
                          <select  defaultValue={props.resident.gender} style={{color:"black"}} name="gender" onChange={changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Gender</option>
                            <option style={{background:"gray"}} value="Adult Male">Adult Male</option>
                            <option style={{background:"gray"}} value="Minor Male">Minor Male</option>
                            <option style={{background:"gray"}} value="Adult Female">Adult Female</option>
                            <option style={{background:"gray"}} value="Minor Female">Minor Female</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            defaultValue={props.resident.email}
                            style={{color:"black"}}
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Civil Status</label>
                          <select defaultValue={props.resident.civilStatus} style={{color:"black"}} name="civilStatus" onChange={changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Civil Status</option>
                            <option style={{background:"gray"}} value="Single Person Without Children">Single Person Without Children</option>
                            <option style={{background:"gray"}} value="Single Parent">Single Parent</option>
                            <option style={{background:"gray"}} value="Married/Cohabitant">Married/Cohabitant</option>
                            <option style={{background:"gray"}} value="Living with Parent">Living with Parent</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Nature Of Admission</label>
                          <select defaultValue={props.resident.natureOfAdmission} style={{color:"black"}} name="natureOfAdmission" onChange={changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Nature Of Admission</option>
                            <option style={{background:"gray"}} value="Voluntary">Voluntary</option>
                            <option style={{background:"gray"}} value="Involuntary">Involuntary</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Educational Attainment</label>
                          <Input
                            defaultValue={props.resident.educationalAttainment}
                            style={{color:"black"}}
                            name="educationalAttainment"
                            onChange={changeHandler}
                            placeholder="Educational Attainment"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Guardian Number</label>
                          <Input
                            defaultValue={props.resident.guardianNumber}
                            style={{color:"black"}}
                            name="guardianNumber"
                            onChange={changeHandler}
                            placeholder="Guardian Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue={props.resident.address}
                            style={{color:"black"}}
                            name="address"
                            onChange={changeHandler}
                            placeholder="Address "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Religion </label>
                          <Input
                            defaultValue={props.resident.religion}
                            style={{color:"black"}}
                            name="religion"
                            onChange={changeHandler}
                            placeholder="Religion"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Income</label>
                          <Input
                            defaultValue={props.resident.income}
                            style={{color:"black"}}
                            name="income"
                            onChange={changeHandler}
                            placeholder="Income "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Type Of Use</label>
                          <select  defaultValue={props.resident.natureOfAdmission} style={{color:"black"}} name="natureOfAdmission" onChange={changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Type Of Use</option>
                            <option style={{background:"gray"}} value="Single">Single</option>
                            <option style={{background:"gray"}} value="Poly">Poly</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Cost Sharing</label>
                          <Input
                            defaultValue={props.resident.costSharing}
                            style={{color:"black"}}
                            name="costSharing"
                            onChange={changeHandler}
                            placeholder="Cost Sharing "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Patient Status </label>
                          <select defaultValue={props.resident.patientStatus} style={{color:"black"}} name="patientStatus" onChange={changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Patient Status</option>
                            <option style={{background:"gray"}} value="Admitted">Admitted</option>
                            <option style={{background:"gray"}} value="Discharge">Discharge</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter className="d-flex">
                    <Button onClickCapture={submitHandler} color="primary" > Done </Button>
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditInternationalModal