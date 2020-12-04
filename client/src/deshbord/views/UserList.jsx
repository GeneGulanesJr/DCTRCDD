
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";
import Axios from "axios";

class Tables extends React.Component {
constructor(){
  super()
  this.state={
  users:[]
  }
}
  componentDidMount=()=>{
    Axios.get('http://localhost:5000/all-user')
    .then(res=>{
      console.log(res.data.user)
      this.setState({
        users:res.data.user
      })
      
    console.log(this.state)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  toggleStatus= (id)=>{
    Axios.get('http://localhost:5000/update-user/'+id)
    .then(res=>{
      this.componentDidMount()
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">User Management</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map(single=>{
                        return(
                          <tr>
                            <td> {single.name} </td>
                            <td> {single.email} </td>
                            <td> {single.isActive ?"Active":"Blocked"} </td>
                            <td> <Button onClick={this.toggleStatus.bind(this, single._id)}  color="warning" size="sm">  {single.isActive ?"Block":"Re Active"} </Button> </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col></Row>
        </div>
      </>
    );
  }
}

export default Tables;
