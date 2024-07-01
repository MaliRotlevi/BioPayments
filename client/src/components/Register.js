import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postUser } from '../store/action/user';
import { Button } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (props) => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [profileCode, setProfile] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isDriver, setIsDriver] = useState(false);
    const [fingerPrint, setFingerPrint] = useState('');
    const [email, setEmail] = useState('');

    const inputRefId = React.createRef();
    const inputRefFirstName = React.createRef();
    const inputRefLastName = React.createRef();
    const inputRefBirthDate = React.createRef();
    const inputRefProfile = React.createRef();
    const inputRefPassword = React.createRef();
    const inputRefUserName = React.createRef();
    const inputRefIsDriver = React.createRef();
    const inputRefFingerPrint = React.createRef();
    const inputRefEmail = React.createRef();

    const updateId = () => setId(inputRefId.current.value);
    const updateFirstName = () => setFirstName(inputRefFirstName.current.value);
    const updateLastName = () => setLastName(inputRefLastName.current.value);
    const updateBirthDate = () => setBirthDate(inputRefBirthDate.current.value);
    const updateProfile = () => setProfile(inputRefProfile.current.value);
    const updatePassword = () => setPassword(inputRefPassword.current.value);
    const updateUserName = () => setUserName(inputRefUserName.current.value);
    const updateIsDriver = (event) => setIsDriver(event.target.checked);
    const updateFingerPrint = () => setFingerPrint(inputRefFingerPrint.current.value);
    const updateEmail = () => setEmail(inputRefEmail.current.value);

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control ref={inputRefId} onKeyUp={updateId} placeholder="Enter ID..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control ref={inputRefFirstName} onKeyUp={updateFirstName} placeholder="Enter first name..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control ref={inputRefLastName} onKeyUp={updateLastName} placeholder="Enter last name..." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={inputRefEmail} onKeyUp={updateEmail} placeholder="Enter email..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridProfileCode">
                    <Form.Label>Profile</Form.Label>
                    <Form.Control ref={inputRefProfile} onKeyUp={updateProfile} placeholder="Enter profile..." />
                    <div style={{ display: 'flex', margin: 'auto', width: 400, flexWrap: 'wrap' }}>
                        <input type="file" accept="*.pdf" style={{ display: 'none' }} id="contained-button-file" />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">Upload</Button>
                        </label>
                    </div>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBirthDate">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control ref={inputRefBirthDate} onKeyUp={updateBirthDate} placeholder="Enter birth date..." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control ref={inputRefUserName} onKeyUp={updateUserName} placeholder="Enter user name..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={inputRefPassword} onKeyUp={updatePassword} placeholder="Enter password..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridIsDriver">
                    <Form.Label>Driver</Form.Label>
                    <FormControlLabel control={<Checkbox />} label="" ref={inputRefIsDriver} onChange={updateIsDriver} />
                </Form.Group>
            </Row>
            <Button color="primary" variant="contained" onClick={() => props.postUser({ id, firstName, lastName, birthDate, userName, password, fingerPrint, profileCode, isDriver, email })}>
                Register
            </Button>
        </Form>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { postUser })(Register);
