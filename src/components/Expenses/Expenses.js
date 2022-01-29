import './Expenses.css'
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
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
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>  
    );
}

export default Expenses;