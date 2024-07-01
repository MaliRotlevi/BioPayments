import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Container } from "reactstrap";
import Loading from "./Loading";
import Register from "./Register";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Details from './Details'
import TravelsToUser from './TravelsToUser';
import './HomePage.css';
import Edit from './Edit';
import {logOutUser} from '../store/action/user';
import {connect} from 'react-redux';

const HomePage = (props) => {
    return (<>
        <div className='auth-wrapper'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav1" className="auth-inner">
                <Container>
                    <Navbar.Brand href="/">Bio-Payment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link><Link to="/Register">register</Link></Nav.Link>
                            <Nav.Link ><Link to="/Loading">loading</Link></Nav.Link>
                            <NavDropdown title="personal area" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><Link to="/Details">details</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/TravelsToUser">travels-history</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/Edit" >Edit Details</Link></NavDropdown.Item>

                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="exit" onClick={()=>{props.logOutUser(null);
                            console.log("exittt")
                            }}>exit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <Routes className="auth-inner">
                <Route path="/" element={<div className="auth-wrapper">
                    <div className="auth-inner"><Login /></div></div>} />
                <Route path="/Register" element={<div className="auth-wrapper">
                    <div className="auth-inner"><Register />
                    </div></div>} />
                <Route path="/Loading" element={<div className="auth-wrapper">
                    <div className="auth-inner"><Loading /></div></div>} />
                <Route path="/TravelsToUser" element={<div className="auth-wrapper">
                    <div className="auth-inner"><TravelsToUser /></div></div>} />
                <Route path="/Details" element={<div className="auth-wrapper">
                    <div className="auth-inner"><Details /></div></div>} />
                <Route path="/Edit" element={<div className="auth-wrapper">
                    <div className="auth-inner"><Edit />
                    </div></div>} />
                <Route exact path="" element={<Login />} />
            </Routes>
            <div />
        </div>
    </>
    )
}


const mapStateToProps = (state) => {
    return {
      currentUser: state.user.currentUser
    }
  }
  
  export default connect(mapStateToProps, { logOutUser })(HomePage);