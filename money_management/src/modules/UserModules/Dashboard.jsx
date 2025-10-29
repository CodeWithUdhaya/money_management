import React from 'react'
import "../UserModules/Dashboard.css"
import Nav from "../../components/Nav"
import CategoryChart from '../../components/CategoryChart';
import { loginApi } from '../../ApiUtils/LoginApi';

const Dashboard = () => {


  const students = [
    { id: 1099, name: "Udhayakumar", course: "Java" },
    { id: 2020, name: "Priya", course: "Spring Boot" },
    { id: 3222, name: "Arun", course: "React" },
  ];

  const handleLogin = async () =>{
          const data = await loginApi({
                "username": "udhayak",
                "password": "Udhaya@123"
               })
            console.log("dashboard "+data);   
  }

  return (
    <div>
    <Nav/>
      <div className='expenses-list'>
        <div className='expenses-list1'>
          <h3>Total Balance</h3>
          <h4>20000</h4>
        </div>
        <div className='expenses-list2'>
          <h3>Total Expenses</h3>
          <h4>20000</h4>
        </div>
        <div className='expenses-list3'>
          <h3>Total Income</h3>
          <h4>20000</h4>
        </div>
        <div className='expenses-list4'>
          <h3>Upcoming Expenses</h3>
          <h4>20000</h4>
        </div>
      </div>
      <div>
          <button>Add Expense</button>
          <button>Edit Expense</button>
          <button>Delete Expense</button>
          <h2>Recent Expenses</h2>
          <table>
            <thead>
            <tr>
            <th></th>
            <th> Category</th>
            <th>Amount</th>
            <th> Date</th>
            </tr>
            </thead>
           <tbody>
            { students && students.map((student,index) =>
               <tr>
                <td>{index+1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
               </tr>
            )}
            
           </tbody>

          </table>
          <button onClick={handleLogin}>Login</button>
          <CategoryChart/>
      </div>

    </div>
  )
}

export default Dashboard