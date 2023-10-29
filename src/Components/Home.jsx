
import { Link } from "react-router-dom";
import NavBar from "./HomeNavbar";
import { Button } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Instapost from "./EventCard";
import EventCard from "./EventCard";
import EventCreated from "./EventCreated";

const Home=()=>{
    return<div style={{background:'#F8C8C6',  height:'100%',
        width:'100%'}}>    
   
    <NavBar/>
    <div >
    <Row>
        <Col lg={4} sm={3} xs={12}>
          
           <img style={{height:"380px"}} src="https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50fGVufDB8fDB8fHww"></img>
        </Col>
        <Col lg={4} sm={3} xs={12}>
        <img style={{height:"380px"}} src="https://media.istockphoto.com/id/1529820791/photo/asian-multi-ethnic-business-people-talk-during-a-coffee-break-in-seminar-business-conference.jpg?s=2048x2048&w=is&k=20&c=28BaVXe1vRpdwWHaKT7fD2iVAO_QCtCqmZgngCE0GgA="></img>
        </Col>
        <Col lg={4} sm={3} xs={12}>
        <img style={{height:"380px"}} src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"></img>
        </Col>
      </Row>
    </div>
     <div style={{}}>
        <div style={{display:'flex',alignContent:'center',justifyContent:'center',marginTop:'10px'}}>
        <Button type="submit" variant="contained">
        <Link to='/CreateEvent' style={{color:'black'}}>
          Create A New Event
        </Link>
      </Button>
        </div>
        <div style={{margin:'80px'}}>
            {/* div invitation */}
            <div>        
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
        </div>
        <div style={{margin:'80px'}}>
        <div>        
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
        </div>
     </div>








  
   

    </div>
}
export default Home;