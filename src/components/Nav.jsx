import React, { useState } from 'react'
import '../components/Nav.css'

const Nav = () => {


  const monthList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let date = new Date();
  const [month,setMonth]=useState(date.getMonth())
  const [year,setYear]=useState(date.getFullYear())
  const[showCalender,setShowCalender]=useState(false);


  return (
    <div>
    <div className='container'>
      <h1 className='title'>Money Management</h1> 
      <div className='date' onClick={e =>setShowCalender(!showCalender) }>
 <h2>{monthList[month].slice(0,3)+" " +year}</h2>
      </div>
      </div>
      {showCalender &&
       <div className='calender'>
         <input type="" />
        </div>}
    </div>
  )
}

export default Nav
