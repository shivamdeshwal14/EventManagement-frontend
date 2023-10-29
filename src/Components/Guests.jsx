// Guest.jsx

import React from 'react';
import Button from '@mui/material/Button';
import NavBar from './HomeNavbar';
import { Card } from '@mui/material';

const guestsData = [
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  // Add more guest data as needed
];

const Guest = () => {
  const handleInviteClick = () => {
    // Add your logic for handling the invite button click here
    alert('Invitation sent!');
  }

  return <div style={{background:'#F8C8C6',height:'100%',width:'100%',}}>

   <NavBar/>
  
    <div style={styles.guestContainer}>
      <h1 style={styles.heading}>Guest List</h1>    
      <ul style={styles.list}>
        {guestsData.map((guest, index) => (
          <Card style={styles.card}>
          <li key={index} style={styles.listItem}>
            <strong>Name:</strong> {guest.name} <br />
            <strong>Phone:</strong> {guest.phone} <br />
            <strong>Email:</strong> {guest.email}<br/>
            <Button variant="contained" color="primary" onClick={handleInviteClick} style={styles.button}>
        Invite
      </Button>
          </li>
          
        </Card>
        ))}
      </ul>
      
      
    </div>
    </div>
}

const styles = {

    card: {

      width:'800px',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#F0F0F0',
      border:'2px solid black',
      marginTop:'20px'
    },
    guestContainer: {
     border:'2px solid black',
      width:'800px',
      // maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ADD8E6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      fontSize: '24px',
      margin: '0 0 20px',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
    listItem: {
      margin: '10px 0',
    },
    button: {
      marginTop: '20px',
    },
  };
  
export default Guest;
