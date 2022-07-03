// import React from 'react'
// import axios from 'axios'
// import {  useState, useEffect } from 'react'
// import Item from './Item'

// const Card = () => {
//   const [info, setInfo] = useState()

//     const userInfo = async () => {
//         const url = "https://randomuser.me/api/";

//         try {
//             const response = await axios.get(url)
//             // console.log(response);
//             const data = response.data.results[0];
//             setInfo(data);
       
//         } catch (error) {
//             console.log(error);
//         }
//     }

//  useEffect(() => {
//    userInfo()
//  }, [])
 
//   return (
//     <div>
//         {info && <Item info={info} userInfo={userInfo}/>}
//     </div>
//   )
// }

// export default Card;
