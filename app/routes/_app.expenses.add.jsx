import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';

export default function ExpensesAddPage(){
    return( 
        <Modal>
            <h1>Add page</h1>
            <ExpenseForm />
        </Modal>
    );
}