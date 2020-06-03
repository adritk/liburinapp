import React from "react";
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "../Styles/Login.css";

class Register extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient-change">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold fontStyle">
                  Sign up right now!
                    </h1>
                  <hr className="hr-light" />
                  <h3 className="mb-4 fontStyle">
                    Enter your personal details and start journey with us!
                  </h3>
                    
                  <div style={{ height: '400px' }} className="fotoLogin"></div>
             
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card"  style={{marginTop: 30}}>
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                            Register Here
                        </h3>
                        <hr className="hr-light" />
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Username
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />

                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />

                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Password
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />

                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Confirm Password
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <div className="text-center mt-4 black-text">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button color="#424242" variant="contained">Sign Up</Button>
                        </Link>

                        <Link to="/login" style={{textDecoration: 'none' }}>
                        <div style={{
                            width: '300px',
                          height: '30px',
                          backgroundColor: 'whitesmoke',
                          borderRadius: '20px',
                          marginTop: '10px',
                          marginLeft: '50px',
                          paddingTop: '3px'
                        }}>
                          <a href="/register" style={{ color: 'black', textDecoration: 'none' }}>Have an account? Sign in here</a>
                        </div>
                        </Link>
                          
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Register;