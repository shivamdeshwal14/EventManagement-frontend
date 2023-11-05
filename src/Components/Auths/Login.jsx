import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Login=()=> {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // login function
  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/login', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data?.error) {
          alert('Invalid Login Details');
        } else {
        
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("userid",data.id)
          // Navigate to the desired page after successful login
          navigate('/Home');
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // Handle the error, e.g., display an error message to the user
      });
  };
  



  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGV2ZW50fGVufDB8fDB8fHww" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

    <Form onSubmit={onLoginSubmitHandler} >


          <div className="divider d-flex align-items-center my-4">
            <h2 className="text-center fw-bold mx-3 mb-0">Login</h2>
          </div>
              
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  value={email} onChange={e=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={e=>setPassword(e.target.value)}/>
         

          <div className="d-flex justify-content-between mb-4">
            
            <a >Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Button type='submit'>
                Login
            </Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Signup" className="link-danger">Register</a></p>
          </div>
          </Form>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0" >
          Copyright © 2023. All rights reserved.
        </div>

        <div>

         
        </div>

      </div>

    </MDBContainer>
  ); 
}

export default Login