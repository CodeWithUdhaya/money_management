import React, { useEffect, useState } from 'react'
import "../UserModules/Dashboard.scss"
import Nav from "../../components/Nav"
import CategoryChart from '../../components/CategoryChart';
import { getExpenses } from '../../ApiUtils/Api';

const Dashboard = () => {

  const [loading,setLoading] = useState(true);
  const [expenseList,setExpensesList]=useState([]);

  useEffect( ()=>{
         fetchExpenses({});
  },[])


  const fetchExpenses = async (params) => {
     const response =  await getExpenses(params)
        setExpensesList(response?.data?.content)
        setInterval(() =>{
             setLoading(!loading)
        },500)  
  }

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
            <th>Id</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
           {
            !expenseList && <p>No expenses Found! </p>
}
           { expenseList && expenseList.map((expense,index) =>
          <tr key={index}>
            <td>{index+1}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>{expense.date}</td>
            <td>{expense.amount}</td>
          </tr>
        )}
        </tbody>
      </table>

      <CategoryChart/>
    </div>
  )
}

export default Dashboard
