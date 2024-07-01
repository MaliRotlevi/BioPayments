import React, { useState, Component } from "react";
import { ListGroup } from 'react-bootstrap'
import './Loading.css'
import { connect } from 'react-redux';
import { getConstracts } from '../store/action/constracts'
import { addConsractToUser } from '../store/action/constractToUser'


const Loading = (props) => {
    const [selectedContract, setSelectedContract] = React.useState(0);
    const [showPaymentDetails, setshowPaymentDetails] = React.useState(false)
    const openPaymentDetails = () => setshowPaymentDetails(true)

    const updateSelectedContract = (con) => {
        const selected=con.contractCode;
        setSelectedContract(selected);
    }

    return (
        <>
            <h1 id='header'>Loading Contract</h1>
            <ListGroup>
                {props.constractsList.map((con) => (
                    <ListGroup.Item onClick={() => {
                        console.log(con.contractCode);                      
                        updateSelectedContract(con);
                        console.log(selectedContract);
                    }}>
                        {con.contractName}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <p>{selectedContract}</p>
            <br />
            <div class="btn btn-primary mb-3" id="btnCon" onClick={openPaymentDetails}> <span class="ps-3">continue</span> <span class="fas fa-arrow-right"></span> </div>
            {showPaymentDetails ?
                <div class="container p-0" >
                    <div class="card px-4">
                        <p class="h8 py-3">Payment Details</p>
                        <div class="row gx-3"></div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Person Name</p> <input class="form-control mb-3" type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Card Number</p> <input class="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Expiry</p> <input class="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">CVV/CVC</p> <input class="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn btn-primary mb-3" onClick={() => {
                                props.addConsractToUser({ constractCode: selectedContract, userId: props.currentUser.userId, accumulatedAmount: 10, startDate: '01/01/1900', endDate: '05/03/2022' })
                            }}> <span class="ps-3">Pay</span> <span class="fas fa-arrow-right"></span> </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        constractsList: state.constracts.travelConstracts,
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps, { getConstracts, addConsractToUser })(Loading);

{/* <div id="btnDropDown">
<Row className="mb-3" >
    <Form.Group as={Col} md="4" >
        <Dropdown onChange={updateSelectedContract}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                choose travel contract
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                {props.constractsList.map((con)=>(
                 <Dropdown.Item href="#/action-1" key={con.contractCode}>{con.contractName}</Dropdown.Item>
                 ) )}
                <Dropdown.Divider />
            </Dropdown.Menu>
        </Dropdown>
    </Form.Group>
</Row> 
</div>  */}

