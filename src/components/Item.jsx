// import {FaEnvelopeOpenText} from "react-icons/fa";
// import {FaPhone} from "react-icons/fa";
// import {IoLocation} from "react-icons/io5";

// const Item = ({info, userInfo}) => {
//     const{email, name, picture, phone, location, dob, registered}=info;
//     const {title, first, last} = name;
//     const {large, medium, thumbnail} = picture;
//     const {city, country} = location;
//     const {age} = dob;
//     const {date}=registered;
//     const registerdate = date.slice(0,10)
//   return (
//     <div>
// <div className='container'>
//         <div className="header">
//             <div className="image"><img className="itemimage" src={large} alt="large" /></div>
//             <div className="fulname">{title} {first} {last}</div>
//         </div>
//     <div className="email">
//         <p className="logo">{<FaEnvelopeOpenText/>}</p>
//         <p className="item">{email}</p>
//         </div>
//     <div className="phone">
//         <p className="logo">{<FaPhone/>}</p>
//         <p className="item">{phone}</p> </div>
//     <div className="location">
//         <p className="logo">{<IoLocation/>}</p>
//         <p className="item">{city}-{country}</p></div>
//     <div className="footer">
//         <p>Age: {age}</p>
//         <p>Register Date: {registerdate}</p>
//     </div>
//     <button onClick={userInfo} className="randomUser">Random User</button>
//     </div>
//     </div>
    
//   )
// }

// export default Item