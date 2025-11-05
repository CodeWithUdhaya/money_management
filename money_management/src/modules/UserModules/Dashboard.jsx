import React, { useEffect, useState } from 'react'
import "../UserModules/Dashboard.scss"
import Nav from "../../components/Nav"
import CategoryChart from '../../components/CategoryChart';

const Dashboard = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },1500)

    return ()=> clearTimeout(timer)
  },[])

  const students = [
    { id: 1099, name: "Udhayakumar", course: "Java" },
    { id: 3222, name: "Arun", course: "React" },
    { id: 2020, name: "Priya", course: "Spring Boot" },
   

  ];
  if(loading){
    return (
      <div className="dashboard-skeleton">
        <header className="skeleton-nav"></header>
        
        {/* skeleton effort */}
        <div className='skeleton-cards'>
          <div></div><div></div><div></div><div></div>
        </div>
        <div className='skeleton-table'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
{/*  */}

      </div>
    )
  }

  return (
    <div className="dashboard">
      <Nav/>
      <div className='expenses-list'>
        <div><h3>Total Balance</h3><h4>20000</h4></div>
        <div><h3>Total Expenses</h3><h4>20000</h4></div>
        <div><h3>Total Income</h3><h4>20000</h4></div>
        <div><h3>Upcoming Expenses</h3><h4>20000</h4></div>
      </div>

      <h2 style={{marginLeft:"20px"}}>Recent Expenses</h2>

      <table className='expenses-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        { students.map((student,index) =>
          <tr key={index}>
            <td>{index+1}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.course}</td>
          </tr>
        )}
        </tbody>
      </table>

      <CategoryChart/>
    </div>
  )
}

export default Dashboard
