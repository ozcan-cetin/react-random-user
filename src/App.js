import './App.css';
// import Card from './components/Card';
import axios from 'axios'
import {  useState, useEffect } from 'react'
import {FaEnvelopeOpenText} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {IoLocation} from "react-icons/io5";

function App() {

    const [info, setInfo] = useState(false)
  
      const userInfo = async () => {
          const url = "https://randomuser.me/api/";
  
          try {
              const response = await axios.get(url)
              // console.log(response);
              const data = response.data.results[0];
              setInfo(data);
         
          } catch (error) {
              console.log(error);
          }
      }
  
   useEffect(() => {
     userInfo()
   }, [])

    // const{email, name, picture, phone, location, dob, registered}=info;
    // const {title, first, last} = name;
    // const {large, medium, thumbnail} = picture;
    // const {city, country} = location;
    // const {age} = dob;
    // const {date}=registered;
    // const registerdate = date.slice(0,10)

  return (
    <div className="App">
      {info && (<div>
<div className='container'>
        <div className="header">
            <div className="image"><img className="itemimage" src={info.picture.large} alt="large" /></div>
            <div className="fulname">{info.name.title} {info.name.first} {info.name.last}</div>
        </div>
    <div className="email">
        <p className="logo">{<FaEnvelopeOpenText/>}</p>
        <p className="item">{info.email}</p>
        </div>
    <div className="phone">
        <p className="logo">{<FaPhone/>}</p>
        <p className="item">{info.phone}</p> </div>
    <div className="location">
        <p className="logo">{<IoLocation/>}</p>
        <p className="item">{info.location.city}-{info.location.country}</p></div>
    <div className="footer">
        <p>Age: {info.dob.age}</p>
        <p>Register Date: {info.registered.date.slice(0,10)}</p>
    </div>
    <button onClick={userInfo} className="randomUser">Random User</button>
    </div>
    </div>)}
     
    </div>
  );
}

export default App;
