import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Lions from '../assets/lions.png'
import Mahatma from '../assets/mahatma.jpg'
import Specs from '../assets/specs.png'
import G20 from '../assets/g20.png'
import Azadi from '../assets/azadi.jpg'
import Yoga from '../assets/yoga.jpg'
import MyGov from '../assets/mygov.png'
import Aple from '../assets/aple.png'
import Banner from '../assets/banner.jpg'
function Login() {
    return (
        <MDBContainer fluid className="p-1 my-0.1 h-custom">
            {/* Added HTML elements at the top */}
            <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img src={Lions} alt="Lions" height={150} width={100}/>
        </div>
        <div style={{ marginLeft: 10 }}>
            <p style={{fontWeight:600,fontSize:20}}>Grevience Redressal Portal</p>
            
          </div>
      </div>

      <div style={{ }}>
        
        <img src={Mahatma} style={{ marginRight: 20 }} alt="Mahatma" />
        <img src={Specs} style={{ marginRight: 20 }} alt="Specs" />
        <img src={G20} style={{ marginRight: 20 }} alt="G20" />
        <img src={Azadi} style={{ marginRight: 20 }} alt="Azadi" />
        <img src={Yoga} style={{ marginRight: 20}} alt="Yoga" />
        <img src={MyGov} style={{ marginRight: 20 }} alt="MyGov" />
        <img src={Aple} style={{marginRight:20}}/>
        
      </div>
    </div>
    <MDBRow>
      <MDBCol col="4" md="6">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <p className="lead fw-normal mb-0 me-3" style={{fontWeight:600}}>Officer Login Portal</p>
        </div>

        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0"></p>
        </div>

        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="formControlLg"
          type="email"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="formControlLg"
          type="password"
          size="lg"
        />

        <div className="d-flex justify-content-between mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn color="primary" size="lg">
          Login
        </MDBBtn>
      </MDBCol>

      
      <MDBCol col="4" md="6">
        <img
          style={{marginTop:-40}}
          src={Banner}
          alt="Your Image Alt Text"
          className="img-fluid"
        />
      </MDBCol>
    </MDBRow>
        </MDBContainer>
    );
}

export default Login;
