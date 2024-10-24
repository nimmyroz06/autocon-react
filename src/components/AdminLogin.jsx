import axios from 'axios'
import './signin.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {


    const navigate = useNavigate()


    const [input, setInput] = useState(
        { "email": "", "password": "" }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }


    const readValue = () => {

        console.log(input)


        axios.post("http://localhost:3030/adminlogin", input).then(
            (response) => {
                console.log(response.data)

                if (response.data.status == "Incorrect Password") {
                    alert("Incorrect Password")
                }
                else if (response.data.status == "Invalid Email Id") {
                    alert("Incorrect Email Id")
                }
                else if (response.data.status === "success"){

                    


                    let token = response.data.token
                    let userid = response.data.userid

                    console.log(userid)
                    console.log(token)


                    sessionStorage.setItem("userid", userid)
                    sessionStorage.setItem("token", token)

                    navigate("/adminview")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Invalid EmailId and Password.");
            }
        )

    }


    return (
        <div className="signin-background">

            <div className="container1">
            <div className='body'>
                <div className="row">

                    <div className="card">
                        <div className="card-body1">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3 ">
                                    <h1 align="center"><u>Admin Login</u></h1>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email Id</label>
                                        <input type="text" placeholder="Enter Your Email-ID"className="form-control" name='email' value={input.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" placeholder="Enter Your Password"className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <br></br>
                                            <center><button onClick={readValue} className="btn btn-success">SignIn</button></center>
                                        </div><br></br>
                                    </div>
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

export default AdminLogin