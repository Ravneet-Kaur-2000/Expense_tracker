import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=> {
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  }

  const FilteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  let expensesContent=  <p>No expenses found</p>

  if(FilteredExpenses.length>0){
    expensesContent=FilteredExpenses.map((expense)=>(
      <ExpenseItem
        key ={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     {/* {FilteredExpenses.length===0?
    (<p>No expenses found</p>)
    :
    (FilteredExpenses.map((expense)=>(
      <ExpenseItem
        key ={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )))}  */}
    <ExpensesChart expenses={FilteredExpenses}/>
    <ExpensesList items={FilteredExpenses}/>

    </Card>
    </li>
  )
}

export default Expenses
