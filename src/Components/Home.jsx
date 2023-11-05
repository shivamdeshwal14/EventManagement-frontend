
import { Link } from "react-router-dom";
import NavBar from "./HomeNavbar";
import { Button } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Instapost from "./EventCard";
import EventCard from "./EventCard";
import EventCreated from "./EventCreatedCard";
import Style from "./Event.module.css";
import styles from"../App.css";
import CarouselHome from "./CarouselHome";
import { useState,useEffect } from "react";
import ButtonStyle from "./Buttons.module.css"


const Home=()=>{

// My invitation
const [myinvites,setMyinvites]=useState([])

useEffect(()=>{

fetch('http://localhost:4000/myinvites',{
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
setMyinvites(data.events)
})
.catch((error)=>{
  console.log("Fetch error",error);
})
},[])

// Event created by you Api 

const [eventDetails,setEvent]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/allevent',{
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
      
     setEvent(data)
    })
    .catch((error)=>{
      console.log("Fetch error",error);
    })
  },[])

 

    return<div className={Style.background}>    
  
   <NavBar/>
  
 
    <div style={{overflow:'hidden'}}>

    
    {/* div for carousel */}
    <div style={{marginTop:'80px'}} >  
    {/* <CarouselHome/> */}
      </div>
    {/* div below images containg all content */}
    <div  >
        {/* div for button */}
        <div style={{display:'flex',alignContent:'center',justifyContent:'center',marginTop:'10px'}}>
        
          
          
          <Button className={ButtonStyle.button} style={{background:'white',marginTop:'20px'}}  type="submit"   size="large">
            <Link style={{fontSize:'24px',color:'black'}} to='/CreateEvent' >
              Create A New Event
            </Link>
          </Button>
        </div>
        {/*div for button ends  */}

         {/* div invitation */}
         <div style={{ margin: '80px'  }}>
  {/* heading div */}
    <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
    <h1 style={{ fontFamily: 'cursive' }}>My Invitations</h1>
    <br />
    <br/>
  </div>
  <br/>
  <br/>
  <Row xs={1} sm={2} md={3} className="g-2">
  
    {myinvites.map((item, idx) => (
      <Col xs={12} sm={6} md={4} key={idx}>
        <EventCard  event={item} />
      </Col>
    ))}
    
  </Row>
</div>
        {/* div invitation ends */}
        {/* div for organised by you */}
        
  <div style={{ margin: '80px'  }}>
  {/* heading div */}
  <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
    <h1 style={{ fontFamily: 'cursive' }}>Organised By you</h1>
    <br />
    <br/>
  </div>
  <br/>
  <br/>
  <Row xs={1} sm={2} md={3} className="g-2">
    {eventDetails.map((item, idx) => {
        if (item.organiser._id == localStorage.getItem("userid")) {
          return(
            <Col xs={12} sm={6} md={4} key={idx}>
            <EventCreated event={item} />
          </Col>
          );
    }
  })
          
  }
  </Row>
</div>

     </div>
     </div>







  
   

    </div>
}
export default Home;