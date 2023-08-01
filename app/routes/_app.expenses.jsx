import {Link, Outlet} from '@remix-run/react';
import ExpensesList from '../components/expenses/ExpensesList'
import { FaPlus, FaDownload } from 'react-icons/fa';
const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'First Expense',
      amount: 12.99,
      date: new Date().toISOString(),
    },
    {
      id: 'e2',
      title: 'Second Expense',
      amount: 16.99,
      date: new Date().toISOString(),
    },
  ];

export default function ExpensesPage(){
    return( 
        <>
            <Outlet />
            <main>
                <h1>Expenses Page Father</h1>
                <section id='expenses-actions'>
                  <Link to={"add"}>
                    <FaPlus />

                    <span>Add Expense</span>
                  </Link>
                  <FaDownload/>
                  <a href="expenses.raw">Load Raw Data</a>
                </section>
                <ExpensesList expenses={DUMMY_EXPENSES}/>
            </main>
        </>

    );
}

