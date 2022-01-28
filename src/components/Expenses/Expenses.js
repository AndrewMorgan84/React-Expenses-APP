import './Expenses.css'
import Card from '../UI/Card.js';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
    <div>
      <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeYearDropdown={filterChangeHandler}/>
          {filteredExpenses.map((item) => {
          return <ExpenseItem 
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
        })}   
      </Card>
    </div>  
    );
}

export default Expenses;