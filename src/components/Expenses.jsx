import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title} 
          amount={el.amount} 
          date={el.date} 
      />
      ))}
    </Card>
  )
}

export default Expenses