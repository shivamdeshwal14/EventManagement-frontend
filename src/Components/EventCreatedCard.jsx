import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import Style from "./Event.module.css"

const EventCreated = ({ event }) => {
  const id=event._id;
 
  return (
    <Card className={Style.EventCard} style={{ background: 'white' }}>
      <CardContent>
        <h1 style={styles.heading}>Event Details</h1>
        <div style={styles.details}>
          <p><strong>Event:</strong> {event ? event.eventname : "Loading"}</p>
          <p><strong>Venue:</strong> {event ? event.venue : "Loading"}</p>
          <p><strong>Date:</strong> {event ? event.date : "Loading"}</p>
          <p><strong>Time:</strong> {event ? event.time : "Loading"}</p>
          <p><strong>Description:</strong> {event ? event.description : "Loading"}</p>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Button style={{background:'#9269E1'}}>
          <Link to={`/Guest?id=${id}`} style={{color:'black',fontSize:'13px',fontWeight:'bold'}}>
            Invite
          </Link>
        </Button>
        <Button style={{background:'#EEA1A7'}}>
          <Link to={`/rsvp?id=${id}`} style={{color:'black',fontSize:'13px',fontWeight:'bold'}}>
            RSVPs
            
          </Link>
        </Button>
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

export default EventCreated;
