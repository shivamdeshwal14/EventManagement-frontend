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
  


  return <div style={{position:'fixed',width:'100%',height:'100%'}}>
              <div style={{display:'flex',background:'white',height:'80px',width:'100%',justifyContent:'space-between'}}>
                        <div style={{display:'flex'}}>
                          <img height={'80px'} src="https://www.shutterstock.com/image-vector/people-holding-handslogo-management-consultation-260nw-631175897.jpg" alt="" />
                          <h3 style={{fontFamily:'fantasy',marginLeft:'10px'}}>EventManagement</h3>
                        </div>
                        <div style={{display:'flex'}}>
                         <h3 style={{fontFamily:'cursive'}}> Your Vision, Our Expertise</h3>
                        </div>

              </div>
   <div style={{border:'2px solid black',marginTop:'4rem',borderRadius:'20px'}} className='container'>
     <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>

        <MDBCol col='10' md='6' style={{padding:'20px'}}>
          <img style={{borderRadius:'20px',width:'500px'}} src="https://img.freepik.com/free-vector/modern-event-banner-template-with-degrade-background_1361-2219.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700524800&semt=ais" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

    <Form onSubmit={onLoginSubmitHandler} >
          <div className="divider d-flex align-items-center my-4">
            <h2 className="text-center fw-bold mx-3 mb-0" style={{fontFamily:'cursive'}}>Login</h2>
          </div>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Your Email id'/>
          <br/>
          <br/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter Your Password'/>
         

          <div className="d-flex justify-content-between mb-4">
            
            <a >Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Button type='submit'>
                Login
            </Button>
           <br/>
           <br/>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Signup" className="link-danger">Register</a></p>
          </div>
          </Form>

        </MDBCol>

      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0" >
          Copyright © 2023. All rights reserved.
        </div>

        <div>

         
        </div>

      </div> */}

    </MDBContainer>
    </div>
      
    </div>
}

export default Login