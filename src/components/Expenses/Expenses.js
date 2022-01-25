import './Expenses.css'
import Card from '../UI/Card.js';
import ExpenseItem from './ExpenseItem';

function Expenses (props) {
    return (
    <Card className='expenses'>
         {props.items.map((item) => {
        return <ExpenseItem key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
      })}   
    </Card>
    );
}

export default Expenses;