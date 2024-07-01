import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postUser } from '../store/action/user'
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
    const [isDriver, setIsDriver] = useState('');
    const [fingerPrint, setFingerPrint] = useState('');
    const [email, setEmail] = useState('');


    const inputRefId = React.createRef()
    const inputRefFirstName = React.createRef()
    const inputRefLastName = React.createRef()
    const inputRefBirthDate = React.createRef()
    const inputRefProfile = React.createRef();
    const inputRefPassword = React.createRef()
    const inputRefUserName = React.createRef()
    const inputRefIsDriver = React.createRef()
    const inputRefFingerPrint = React.createRef()
    const inputRefEmail = React.createRef()




    const updateId = () => {
        const inputTextId = inputRefId.current.value
        setId(inputTextId);
    }
    const updateFirstName = () => {
        const inputTextFirstName = inputRefFirstName.current.value
        setFirstName(inputTextFirstName);
    }
    const updateLastName = () => {
        const inputTextLastName = inputRefLastName.current.value
        setLastName(inputTextLastName);
    }
    const updateBirthDate = () => {
        const inputTextBirthDate = inputRefBirthDate.current.value
        setBirthDate(inputTextBirthDate);
    }
    const updateProfie = () => {
        const inputProfile = inputRefProfile.current.value;
        setProfile(inputProfile);
    }
    const updatePassword = () => {
        const inputTextPassword = inputRefPassword.current.value
        setPassword(inputTextPassword);
    }
    const updateUserName = () => {
        const inputTextUserName = inputRefUserName.current.value
        setUserName(inputTextUserName);
    }
    const updateIsDriver = () => {
        const inputTextIsDriver = inputRefIsDriver.current.value
        setIsDriver(inputTextIsDriver);
    }
    const updateFingerPrint = () => {
        const inputTextFingerPrint = inputRefFingerPrint.current.value
        setFingerPrint(inputTextFingerPrint);
    }
    const updateEmail = () => {
        const inputTextEmail = inputRefEmail.current.value
        setEmail(inputTextEmail);
    }
    return (<>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridId">
                    <Form.Label>id</Form.Label>
                    <Form.Control ref={inputRefId} onKeyUp={updateId} placeholder="enter id..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>first Name</Form.Label>
                    <Form.Control ref={inputRefFirstName} onKeyUp={updateFirstName} placeholder="enter first name..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>last Name</Form.Label>
                    <Form.Control ref={inputRefLastName} onKeyUp={updateLastName} placeholder="enter last name..." />
                </Form.Group>


            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={inputRefEmail} onKeyUp={updateEmail} placeholder="enter email..." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridProfileCode">
                    <Form.Label>Profile</Form.Label>
                    <Form.Control ref={inputRefProfile} onKeyUp={updateProfie} placeholder="enter profile..." />
                    <div style={{
                        display: 'flex',
                        margin: 'auto',
                        width: 400,
                        flexWrap: 'wrap',
                    }}>
                        <input type="file" accept="*.pdf" style={{ display: 'none' }} id="contained-button-file" />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                    </div>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBirthDate">
                    <Form.Label>birthDate</Form.Label>
                    <Form.Control ref={inputRefBirthDate} onKeyUp={updateBirthDate} placeholder="enter birthDate..." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control ref={inputRefUserName} onKeyUp={updateUserName} placeholder="enter user name..."/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={inputRefPassword} onKeyUp={updatePassword} placeholder="enter password..."/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridIsDriver">
                    <Form.Label>driver</Form.Label>
                    <h1></h1>
                    <FormControlLabel id="inp" control={<Checkbox />}
                        label=""  ref={inputRefIsDriver}
                        onKeyUp={updateIsDriver}  onChange={updateIsDriver}/>
                </Form.Group>
                </Row>
            <Button color="primary" variant="contained" id="btnRegist"
                onClick={() => { props.postUser({ id, firstName, lastName, birthDate, userName, password, fingerPrint, profileCode, isDriver, email }) }}>
                Regist
            </Button>
        </Form>

    </>)
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, { postUser })(Register);
