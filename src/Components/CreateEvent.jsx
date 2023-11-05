// import { Button } from "@mui/joy";
import NavBar from "./HomeNavbar"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Style from "./Event.module.css"
import { useState } from "react";
// use states


const CreateEvent=()=>{
const[eventname,setEventname]=useState('');
const [venue,setVenue]=useState('');
const[date,setDate]=useState('');
const[time,setTime]=useState('');
const[description,setDescription]=useState('');

// function for creating time
const onCreateEvent=e=>{
  e.preventDefault()
  fetch('http://localhost:4000/createEvent',{
    method:"post",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
  },
    body: JSON.stringify({eventname,date,time,venue,description})

  })
  .then((res)=>{
    if(!res.ok){
      throw new Error("Network not ok");
    }
    return res.json();
  })
  .then(data=>{
 
   alert("event created succesfully") 
   setEventname("");
   setDate("")
   setVenue("")
   setDescription("")
   setTime(" ");
   
  })
  .catch((error)=>{
    console.log("Fetch error",error);
  })
  }
    return<div className={Style.background}>
        <NavBar/>
        <div  style={{margin:'100px'}} >
          <Form onSubmit={onCreateEvent}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                <strong>
                Name of Event
                </strong>
                
              </Form.Label>
              <Col sm="10">
                <Form.Control  value={eventname} onChange={e=>setEventname(e.target.value)} placeholder="Name of Event" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                Venue
                </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control  value={venue} onChange={e=>setVenue(e.target.value)} placeholder="Venue " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                Date
                </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date"  value={date} onChange={e=>setDate(e.target.value)} placeholder="Date of event " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                  Time
                </strong>
                
              </Form.Label>
              <Col sm="10">
                <Form.Control type="time" value={time} onChange={e=>setTime(e.target.value)} placeholder="Time " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                  Description
                </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control  value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description of Venue " />
              </Col>
            </Form.Group>
            
            <Button type="submit" variant="contained">
             Create Event
                </Button>
          </Form>
          <br/>
        
          <Button type="submit" variant="contained">
            <Link to='/Home' style={{color:'black'}}>
                 Home Page 
              </Link>
            </Button>

        </div>

    </div>
}
export default CreateEvent