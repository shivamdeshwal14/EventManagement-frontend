
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const EventCreated = () => {
  const eventDetails = {
    event: 'Sample Event',
    venue: 'Event Venue',
    date: '2023-10-31',
    time: '12:00 PM',
    description: 'This is a sample event description.',
    organiser: 'John Doe',
  };

  const handleInviteClick = () => {
    // Add your logic for handling the invite button click here
    alert('Invitation sent!');
  }

  return (
    <Card style={styles.card}>
      <CardContent>
        <h1 style={styles.heading}>Event Details</h1>
        <div style={styles.details}>
          <p><strong>Event:</strong> {eventDetails.event}</p>
          <p><strong>Venue:</strong> {eventDetails.venue}</p>
          <p><strong>Date:</strong> {eventDetails.date}</p>
          <p><strong>Time:</strong> {eventDetails.time}</p>
          <p><strong>Description:</strong> {eventDetails.description}</p>
          <p><strong>Organiser:</strong> {eventDetails.organiser}</p>
        </div>
        <Button>
          <Link  to='/Guest'>
            Invite Guests
          </Link>
        </Button>
        <Button>
          <Link  to='/rsvp'>
            RSVPs
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

const styles = {
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#F0F0F0',
  },
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
