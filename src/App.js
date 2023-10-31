
import './App.css';
import CreateEvent from './Components/CreateEvent';
import Guests from './Components/Guests';
import Home from './Components/Home';
import {Route, Router, Routes} from 'react-router-dom'
import Login from './Components/Auths/Login';
import Signup from './Components/Auths/Signup';
import Rsvp from './Components/Rsvp';


const App=()=>{
  return<>
  
  <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/CreateEvent' element={<CreateEvent/>}></Route>
    <Route path='/Guest' element={<Guests/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/rsvp' element={<Rsvp/>}></Route>
    
    <Route path='/Signup' element={<Signup/>}></Route>
  </Routes>
 
  </>
}
export default App;