// import { Button } from "@mui/joy";
import NavBar from "./HomeNavbar"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Style from "./Event.module.css"
const CreateEvent=()=>{
    return<div className={Style.background}>
        <NavBar/>
        <div  style={{margin:'100px'}} >
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                <strong>
                Name of Event
                </strong>
                
              </Form.Label>
              <Col sm="10">
                <Form.Control   placeholder="Name of Event" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                Venue
                </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control  placeholder="Venue " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                Date
                </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder="Date of event " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                  Time
                </strong>
                
              </Form.Label>
              <Col sm="10">
                <Form.Control type="time" placeholder="Time " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <strong>
                  Description
                </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control  placeholder="Description of Venue " />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2"><strong>
              Organiser
              </strong>
              
              </Form.Label>
              <Col sm="10">
                <Form.Control  placeholder="Name of organiser " />
              </Col>
            </Form.Group>
            <Button type="submit" variant="contained">
              <Link to='/' style={{color:'black'}}>
                Create Event
              </Link>
            </Button>
          </Form>

        </div>

    </div>
}
export default CreateEvent