import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from 'store/Actions/expenses';

export const DeleteExpense = ({ show, setShow, id }) => {

  const { expense } = useSelector((state) => state?.expenses)
  const dispatch = useDispatch();

  return (
    <Modal
      heading="Delete Expense"
      customBody={
        <div className="mb-[32px]">
          Are you sure you wish to delete this expense details? This action is permanent
          and can not be undone.
        </div>
      }
      submitText="Delete Expense"
      handleSubmit={async () => {
        await dispatch(deleteExpense(expense?.id,setShow));
      }}
      show={show}
      setShow={setShow}
    />
  );
};