import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';

export default function UpdateExpensesPage(){
    return( 
        <Modal>
            <h1>Id page</h1>
            <ExpenseForm />
        </Modal>
    );
}