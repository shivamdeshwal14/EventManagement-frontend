// Guest.jsx

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import NavBar from './HomeNavbar';
import { Card } from '@mui/material';
import { useLocation } from 'react-router-dom';

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
// fetching event id from home page
const location=useLocation()

const params = new URLSearchParams(location.search);
const id = params.get('id');




const onInvite=(uid)=>{
 

  fetch(`http://localhost:4000/invite/${uid}/${id}`,{
    method:"put",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
  },  
    })
  .then((res)=>{
    if(!res.ok){
      throw new Error("Network not ok");
    }
    return res.json();
  })
  .then(data=>{

  console.log(data);
  alert("Invitation sent")
  })
  .catch((error)=>{
    console.log("Fetch error",error);
    alert("Not sent")
  })
}

const[guestData,setGuestData]=useState([])
// console.log(guestData);





  // fetching all guestss
  useEffect(()=>{

    fetch('http://localhost:4000/alluser',{
      method:"get",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    },  
      })
    .then((res)=>{
      if(!res.ok){
        throw new Error("Network not ok");
      }
      return res.json();
    })
    .then(data=>{

      setGuestData(data)
      
    })
    .catch((error)=>{
      console.log("Fetch error",error);
    })
  },[])

  return <div style={{background:'#F8C8C6',height:'100%',width:'100%',}}>

   <NavBar/>
  
    <div style={styles.guestContainer}>
      <h1 style={styles.heading}>Guest List</h1>    
      <ul style={styles.list}>
        
      {guestData.map((guest, index) => {
  if (guest._id !== localStorage.getItem("userid")) {
    return (
      <Card style={styles.card} key={index}>
        <li style={styles.listItem}>
          <strong>Name:</strong> {guest.name} <br />
          <strong>Email:</strong> {guest.email}<br/>
          <Button variant="contained" color="primary" onClick={() => onInvite(guest._id)} style={styles.button}>
            Invite
          </Button>
        </li>
      </Card>
    );
  }
  return null; // or you can use an empty fragment <> </>
})}
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
