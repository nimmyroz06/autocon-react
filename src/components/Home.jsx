import React from 'react'
import './home.css'
import { useRef } from 'react'
const Home = () => {
  const servicesSectionRef = useRef(null);
  const scrollToServices = () => {
    servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='background-div'>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card">
              <img src="https://www.shutterstock.com/image-vector/car-rent-care-auto-service-600nw-2409587491.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <center><h1 class="card-title">AUTO CONSULTANCY SERVICE</h1>
                  <p class="card-text"></p>
                  <a href="#!" onClick={scrollToServices} class="btn btn-primary"><b>OUR SERVICES</b></a></center>

                <div class="d-grid gap-2 col-6 mx-auto">
                  <br></br><button type="button" class="btn btn-outline-info"><b>Transfer Of Ownership</b></button><br></br>
                  <br></br><button type="button" class="btn btn-outline-info"><b>Change Of Address In RC</b></button><br></br>
                  <br></br><button type="button" class="btn btn-outline-info"><b>Registration Renewal</b></button><br></br>
                  <br></br><button type="button" class="btn btn-outline-info"><b>Phone Number Upadate In RC</b></button><br></br>
                  <br></br><button type="button" class="btn btn-outline-info"><b>Duplicate RC Issuance</b></button><br></br>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div
        ref={servicesSectionRef}
        style={{ marginTop: '50px', padding: '20px' }}>
      </div>
    </div>
  )
}

export default Home
