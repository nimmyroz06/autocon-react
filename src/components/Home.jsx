import React from 'react'
import './home.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
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
                  <br></br>
                  <Link to="/Renewal"><center>
                  <button type="button" class="btn btn-outline-info"><b>Registration Renewal</b>
                  </button></center>
                  </Link>
                  <br></br>

                  <br></br>
                  <Link to="/Duplicate"><center>
                  <button type="button" class="btn btn-outline-info"><b>Duplicate RC Issuance</b>
                  </button></center>
                  </Link>
                  <br></br>

                  <br></br>
                  <Link to="/OwnershipTrans"><center>
                  <button type="button" class="btn btn-outline-info"><b>Transfer Of Ownership</b>
                  </button></center>
                  </Link>
                  <br></br>

                  <br></br>
                  <Link to="/Address"><center>
                  <button type="button" class="btn btn-outline-info"><b>Change of Address in RC</b>
                  </button></center>
                  </Link>
                  <br></br>

                  <br></br>
                  <Link to="/Phnumber"><center>
                  <button type="button" class="btn btn-outline-info"><b>Phone Number Updation in RC</b>
                  </button></center>
                  </Link>
                  <br></br>
                  
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
