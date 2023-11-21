import { Link } from "react-router-dom";
import * as React from 'react';
import { Avatar, Button } from "@mui/material";
import { Typography, Box } from "@mui/material";
import Style from "./Event.module.css"
const NavBar = () => {
const onLogout=()=>{
    localStorage.removeItem("jwt");
    localStorage.removeItem("userid")
}
const userId=localStorage.getItem("userid")
const [loggedinuser,setLoggedinUser]=React.useState([])
console.log(loggedinuser);
React.useEffect(()=>{
    fetch(`http://localhost:4000/user/${userId}`,{
      method:"get",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    }
  })
    .then(res=>res.json())
    .then(data=> {
    setLoggedinUser(data.user)
    
      
    })




},[])

    return (
       
        <div className={Style.NavBar}>
            <div style={{display:'flex'}}>
                <img height={'80px'} src="https://www.shutterstock.com/image-vector/people-holding-handslogo-management-consultation-260nw-631175897.jpg" alt="" />
                <h3 style={{fontFamily:'fantasy',marginLeft:'10px'}}>SpectraPlan</h3>
             </div>
                <div style={{display:'flex'}}>
                    <h3 style={{fontFamily:'cursive'}}> Your Vision, Our Expertise</h3>
                </div>
                <div style={{display:'flex'}}>
                    <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww" alt="H" style={{marginTop:'1.2rem',marginRight:'0.5rem'}}>
                                            </Avatar>
                    <h3> {loggedinuser.name}</h3>
                    <Button style={{background:'red',marginTop:'2.5rem',marginLeft:'0.5rem',marginRight:'0.5rem',maxHeight:'2rem'}} >
                      <Link to='/' style={{color:'black'}} onClick={onLogout} >
                        Logout
                      </Link>
                    </Button>
                </div>
           
           
            
            
        </div>
    );
}

export default NavBar;
