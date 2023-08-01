import expensesStyle from '~/styles/expenses.css';
import { Outlet } from '@remix-run/react';
import ExpensesHeader from '../components/navigation/ExpensesHeader';

export default function ExpensesAppLayout(){
    return(
        <>
            <h1>Hi from app file</h1>
            <ExpensesHeader />
            <Outlet/>
        </>
    );
}

export function links (){
    return[{rel: 'stylesheet', href: expensesStyle}]
}