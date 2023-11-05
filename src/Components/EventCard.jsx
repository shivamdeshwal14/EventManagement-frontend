import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap'
import { Form, Link, useNavigate } from 'react-router-dom';
import Style from "./Event.module.css"
import { TextField } from '@mui/material';

const EventCard= ({ event }) => {
  const id=event._id;
  const[replyText,setReplyText]=useState('')
  
  const onReply=()=>{
   fetch(`http://localhost:4000/reply/${id}`, {
     method: "put",
     headers: {
       "Content-Type": "application/json",
       "Authorization":"Bearer " +localStorage.getItem("jwt")
     },
     body: JSON.stringify({
       replyText
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
         alert('Error');
       } else {
       
       alert("Replied")
       setReplyText("")
       }
     })
     .catch((error) => {
       console.error("Fetch error:", error);
      });
  }
  return (
    <Card className={Style.EventCard} style={{ background: 'white',borderRadius:'25px' }}>
      <CardContent>
        <h1 style={styles.heading}>You are invited </h1>
        <div style={styles.details}>
          <p><strong>Event:</strong> {event ? event.eventname : "Loading"}</p>
          <p><strong>Venue:</strong> {event ? event.venue : "Loading"}</p>
          <p><strong>Date:</strong> {event ? event.date : "Loading"}</p>
          <p><strong>Time:</strong> {event ? event.time : "Loading"}</p>
          <p><strong>Description:</strong> {event ? event.description : "Loading"}</p>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Button style={{background:'#EEA1A7',height:'45px',width:'100px',color:'black'}} onClick={onReply}>
          Send Reply
        </Button>
        <TextField style={{border:'2px solid black',fontSize: '16px'}}
        variant="outlined"
        value={replyText}
        onChange={e=>setReplyText(e.target.value)}
        inputProps={{ style: { fontSize: '16px' } }}
       > </TextField>
        </div>
      </CardContent>
    </Card>
  );
}
const styles = {
  heading: {
    fontSize: '24px',
    margin: '0 0 20px',
    
    
  },
  details: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
  },
};

export default EventCard;
