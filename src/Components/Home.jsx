
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


const Home=()=>{
    return<div className={Style.background}>    
  
   <NavBar/>
  
 
    <div style={{overflow:'hidden'}}>

    
    {/* div for carousel */}
    <div style={{marginTop:'80px'}} >  
    <CarouselHome/>
    {/* <Row>
        <Col lg={4} sm={3} xs={12}>
          
           <img height={'350px'} src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50fGVufDB8fDB8fHww"></img>
        </Col>
        <Col lg={4} sm={3} xs={12}>
        <img style={{height:'350px'}} src="https://plus.unsplash.com/premium_photo-1663011131989-e749d08736c8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGV2ZW50fGVufDB8fDB8fHww"></img>
        </Col>
        <Col lg={4} sm={3} xs={12}>
        <img style={{height:'350px'}} src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"></img>
        </Col>
      </Row> */}
    </div>
    {/* div below images containg all content */}
    <div  >
        {/* div for button */}
        <div style={{display:'flex',alignContent:'center',justifyContent:'center',marginTop:'10px'}}>
          <Button type="submit" style={{background:'red'}}>
            <Link to='/CreateEvent' style={{color:'black'}}>
              Create A New Event
            </Link>
          </Button>
        </div>
        {/*div for button ends  */}

         {/* div invitation */}
        <div style={{margin:'80px'}}> 
                <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
                    <h2>Invitations </h2>
                </div>
                <Row xs={1} sm={2} md={3} className="g-2">                                                    
                      <Col  xs={12} sm={6} md={4} >
                           <EventCard/>                                        
                      </Col>
                      <Col  xs={12} sm={6} md={4} >
                            <EventCard/>
                      </Col>
                      <Col  xs={12} sm={6} md={4} >
                           <EventCard/>
                       </Col>
                  </Row>
        </div>
        {/* div invitation ends */}
        {/* div for organised by you */}
        <div style={{margin:'80px'}}>
               {/* heading div */}
                <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
                    <h2>Organised By you</h2>
                </div>
                <Row xs={1} sm={2} md={3} className="g-2">
                    <Col  xs={12} sm={6} md={4} >
                        <EventCreated/>
                    </Col>
                    <Col  xs={12} sm={6} md={4} >
                        <EventCreated/>
                    </Col>
                    <Col  xs={12} sm={6} md={4} >
                        <EventCreated/>
                    </Col>
                </Row>
             
       </div>
        {/* div for organised by you ends */}
     </div>
     </div>







  
   

    </div>
}
export default Home;