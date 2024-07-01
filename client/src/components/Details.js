import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, Button, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import './Details.css';
import { getProfileName } from '../store/action/profile'
import { getConstractToUser } from '../store/action/constractToUser'
import { getConstracts } from '../store/action/constracts'



const Details = (props) => {

  
  const getConstractName = (codeC) => {

    var x = props.constractsList.find((item) => item.contractCode == codeC)
    return x.contractName;

  }
  const getConstractValue = (codeC) => {

    var x = props.constractsList.find((item) => item.contractCode == codeC)
    return x.price;

  }

  return (
    <>
      <h1>Details</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control disabled value={props.currentUser.firstName} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control disabled value={props.currentUser.lastName} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control disabled value={props.currentUser.email} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridProfile">
            <Form.Label>Profile</Form.Label>
            <Form.Control disabled value={props.currentProfile.profileName} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control disabled value={props.currentUser.userName} />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={props.currentUser.password} />
          </Form.Group>
        </Row>
      </Form>

      <h3>Your active contracts </h3>


      <ListGroup as="ol" numbered>
        {props.constractToUserList.map((row) =>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{getConstractName(row.constractCode)}</div>
              {getConstractName(row.constractCode)}
            </div>
            <Badge variant="primary" pill>
              {getConstractValue(row.constractCode)}
            </Badge>
          </ListGroup.Item>
        )}
      </ListGroup>
      <label></label>
    </>

  )
}



const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    currentProfile: state.profile.currentProfile,
    constractToUserList: state.constractToUser.constractsToUser,
    constractsList: state.constracts.travelConstracts
  }
}
export default connect(mapStateToProps)(Details);


