import React, { useState } from 'react';
import {  } from 'reactstrap';
import classnames from 'classnames';

import {
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Row, 
  Col
} from "reactstrap";

import ResidentForm from './ResidentForm'

const AddFlight =(props)=> {
    
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return (
      <>
        <div className="content">
          <Row>
            <div>
            <Nav tabs>
                <NavItem style={{cursor:"pointer"}}>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                <span style={{color:"white", cursor:"pointer"}}> CREATE RESIDENTS</span>
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <ResidentForm/>
                        </Col>
                    </Row>          
                </TabPane>
            </TabContent>
            </div>
          </Row>
        </div>
      </>
    );
}

export default AddFlight;
