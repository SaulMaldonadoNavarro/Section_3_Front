import {Link, Outlet, useLoaderData} from '@remix-run/react';
import ExpensesList from '../components/expenses/ExpensesList'
import { FaPlus, FaDownload } from 'react-icons/fa';
import {getExpenses} from '../data/expenses.server';

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
  const expenses = useLoaderData();
  //console.log(expenses);

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
                <ExpensesList expenses={expenses}/>
            </main>
        </>
    );
}

export function loader(){
  return getExpenses();
}