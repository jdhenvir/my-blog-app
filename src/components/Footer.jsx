import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-black text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/river.dhen/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/channel/UCdYy8oEp2cLGeJTEBt95iew' role='button'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://steamcommunity.com/id/dhenvir/' role='button'>
            <MDBIcon fab icon='steam' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/dhenvir_/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='discord' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/jdhenvir' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(225, 225, 225, 0.1)' }}>
        © 2023 Copyright:
        <a className='text-white' href='/'>
          DhenFolio
        </a>
      </div>
    </MDBFooter>
  );
}