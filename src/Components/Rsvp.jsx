import { Button, Card } from "@mui/material";
import NavBar from "./HomeNavbar";

const Rsvp=()=>{
    return <div style={{background:'#F8C8C6',height:'100%',width:'100%',}}>

    <NavBar/>
   
     <div style={styles.guestContainer}>
      
       <h1>Rsvp from Guests</h1> 
       <ul style={styles.list}>
         
           <Card style={styles.card}>
           
           <div >
          <p><strong>Guest Name</strong> Shivam Deshwal</p>
          <p><strong>Guest Id</strong> 123456789</p>
          <p><strong>Guest PhoneNo</strong> 89562325214</p>
          <p><strong>Reply From Guest</strong>i will join the session</p>
         
        </div>
           
         </Card>
       
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
      margin: '0  auto',
      
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
export default Rsvp;