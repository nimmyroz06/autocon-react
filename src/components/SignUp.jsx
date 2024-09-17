import React, { useState } from 'react'
import './signup.css';
import axios from 'axios';

const SignUp = () => {

    const[input,setInput]=new useState(
        {"name":"","phone":"","email":"","district":"","password":"","cnfpass":""}
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        if (input.password==input.cnfpass) {
            let newInput={"name":input.name,"phone":input.phone,"email":input.email,"district":input.district,"password":input.password}
            

            axios.post("",newInput).then(
                (response)=>{
                    console.log(response.data)

                    if (response.data.status=="success") {
                        alert("Registered Successfully")
                    } else {
                        alert("Email Id alraedy exist")
                    }
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
            
        } else {
            alert("Password and Confirm Password doesn't match")
        }
    }
    return (
        <div className="signup-background">
            <div className="container">
                <div className="row">

                    <div className="card">
                        <div className="card-body">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3 ">
                                    <h1 align="center"><u>Create Your Account</u></h1>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="number" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email Id</label>
                                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">District</label>
                                        <select name="district" id="" className="form-control" value={input.district} onChange={inputHandler}>
                                            <option value="--Select--">--Select--</option>
                                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                            <option value="Kollam">Kollam</option>
                                            <option value="Pathanamthitta">Pathanamthitta</option>
                                            <option value="Alappuzha">Alappuzha</option>
                                            <option value="Kottayam">Kottayam</option>
                                            <option value="Idukki">Idukki</option>
                                            <option value="Ernakulam">Ernakulam</option>
                                            <option value="Thrissur">Thrissur</option>
                                            <option value="Palakkad">Palakkad</option>
                                            <option value="Malappuram">Malappuram</option>
                                            <option value="Kozhikode">Kozhikode</option>
                                            <option value="Wayanad">Wayanad</option>
                                            <option value="Kannur">Kannur</option>
                                            <option value="Kasargod">Kasargod</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <br></br>
                                        <center><button onClick={readValue} className="btn btn-success">Register</button></center>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <center><h6>Already have an account?</h6>
                                        <a href="" className="btn btn-primary">Back to Login</a></center>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>




        </div>
    )
}

export default SignUp