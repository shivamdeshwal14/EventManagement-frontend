import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Signup=()=> {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')

const onSignupSubmitHandler=e=>{
  e.preventDefault()

  fetch('http://localhost:4000/signup',{
    method:"post",
    headers:{
      "Content-Type":"application/json"
  },
    body: JSON.stringify({name,email,password})

  } )
  .then((res)=>{
    if(!res.ok){
      throw new Error("Network not ok");
    }
    return res.json();
  })
  .then(data=>{
    if(data.msg==='User Added Successfully')
   {
    alert('user created successfully')
    // navigate('/login')
   }
   else{
   alert('error')
   }
  
 
  })
  .catch((error)=>{
    console.log("Fetch error",error);
  })
  }
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
                          <img  style={{borderRadius:'20px',width:'500px',maxHeight:'400px'}}  src="https://img.freepik.com/free-vector/you-are-invited-our-grand-opening-invitation-card-template_53876-119181.jpg?size=626&ext=jpg&ga=GA1.1.657913657.1695548141&semt=ais" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                    <Form onSubmit={onSignupSubmitHandler}>


                          <div className="divider d-flex align-items-center my-4">
                            <h2 className="text-center fw-bold mx-3 mb-0" style={{fontFamily:'cursive'}}>Signup</h2>
                          </div>
                              
                          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter Your Email '/>
                          <br/>
                          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter Password'/>
                          <br/>
                          <MDBInput wrapperClass='mb-4' label='Enter Name' id='formControlLg'  size="lg"  value={name} onChange={e=>setName(e.target.value)} placeholder='Enter Name'/>

                          <div className="d-flex justify-content-between mb-4">
                            
                            <a >Forgot password?</a>
                          </div>

                          <div className='text-center text-md-start mt-4 pt-2'>
                            <Button type='submit' >
                                SignUp
                            </Button>
                            <br/>
                            <br/>
                           
                            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/" className="link-danger">Login</a></p>
                          </div>
                          </Form>

                        </MDBCol>

                      </MDBRow>
                  </MDBContainer>
                  </div>


  </div> 
}

export default Signup;