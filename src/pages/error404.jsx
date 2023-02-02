import Lottie from "lottie-react";
import error404Animation from "../assets/error-404.json";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Error404() {
  return (
    <MDBContainer fluid style={{ backgroundColor: "#141414"}}>
      <MDBRow style={{ minHeight: "100vh"}} center>
        <MDBCol size='10' md='4' center>
          <MDBCard alignment='center'>
            <Lottie animationData={error404Animation} style={{ height: 300 }} />
            ;
            <MDBCardBody>
              <MDBCardTitle>Look like you're lost</MDBCardTitle>
              <MDBCardText>
              the page you are looking for not avaible!
              </MDBCardText>
              <MDBBtn href="/">Go to Home</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
