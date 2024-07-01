import React, { useState, Component, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { updetaUser } from '../store/action/user'
import './Details.css';


const Edit = (props) => {
  const [firstName, setFirstName] = useState(props.currentUser.firstName);
  const [lastName, setLastName] = useState(props.currentUser.lastName);
  const [profileCode, setProfileCode] = useState(props.currentUser.profileCode);
  const [password, setPassword] = useState(props.currentUser.password);
  const [userName, setUserName] = useState(props.currentUser.userName);
  const [email, setEmail] = useState(props.currentUser.email);

  const inputRefFirstName = React.createRef()
  const inputRefLastName = React.createRef()
  const inputRefEmail = React.createRef()
  const inputRefPassword = React.createRef()
  const inputRefUserName = React.createRef()
  const inputRefProfileCode = React.createRef()


  const updateFirstName = () => {
    const inputTextFirstName = inputRefFirstName.current.value
    setFirstName(inputTextFirstName);
  }
  const updateLastName = () => {
    const inputTextLastName = inputRefLastName.current.value
    setLastName(inputTextLastName);
  }

  const updateEmail = () => {
    const inputTextEmail = inputRefEmail.current.value
    setEmail(inputTextEmail);
  }
  const updatePassword = () => {
    const inputTextPassword = inputRefPassword.current.value
    setPassword(inputTextPassword);
  }
  const updateUserName = () => {
    const inputTextUserName = inputRefUserName.current.value
    setUserName(inputTextUserName);
  }
  const updateProfileCode = () => {
    const inputTextProfileCode = inputRefProfileCode.current.value
    setProfileCode(inputTextProfileCode);
  }

  return (
    <>
      <h1>Edit Details</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>first Name</Form.Label>
            <Form.Control defaultValue={props.currentUser.firstName} ref={inputRefFirstName} onKeyUp={updateFirstName} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>last Name</Form.Label>
            <Form.Control defaultValue={props.currentUser.lastName} ref={inputRefLastName} onKeyUp={updateLastName} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control defaultValue={props.currentUser.email} ref={inputRefEmail} onKeyUp={updateEmail} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridProfileCode">
            <Form.Label>Profile</Form.Label>
            <Form.Control defaultValue={props.currentProfile.profileName} ref={inputRefProfileCode} onKeyUp={updateProfileCode} />
            <div style={{
              display: 'flex',
              margin: 'auto',
              width: 400,
              flexWrap: 'wrap',
            }}>

              <input
                type="file"
                accept="*.pdf"
                style={{ display: 'none' }}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
            </div>

          </Form.Group>

          <Form.Group as={Col} controlId="formGridUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control defaultValue={props.currentUser.userName} ref={inputRefUserName} onKeyUp={updateUserName} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control defaultValue={props.currentUser.password} ref={inputRefPassword} onKeyUp={updatePassword} />
          </Form.Group>
        </Row>
        <Button color="primary" variant="contained" id="btnRegist"
          onClick={() => { props.updetaUser({ id: props.currentUser.id, firstName, lastName, birthDate: props.currentUser.birthDate, userName, password, fingerPrint: props.currentUser.fingerPrint, profileCode, isDriver: props.currentUser.isDriver, email }) }}>
          Save Changes
        </Button>
      </Form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    currentProfile:state.profile.currentProfile
  }
}
export default connect(mapStateToProps, { updetaUser })(Edit);

