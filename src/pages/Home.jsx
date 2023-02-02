
import { MDBTypography } from "mdb-react-ui-kit"

import myimgcover from "../assets/me-hero-dark.jpg"

export default function Home(props){
    return(
        <div
        className='p-5 text-center bg-image'
        style={{ 
            backgroundImage: `url('${myimgcover}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundColor: "black",
            height: '95vh',
         }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            <MDBTypography tag='div' className='display-1 pb-3 mb-3'>
                I am {props.name}
            </MDBTypography>
            <MDBTypography tag='div' className='display-6 pb-3 mb-3'>
                {props.profession}
            </MDBTypography>
            </div>
          </div>
        </div>
      </div>
    )
}