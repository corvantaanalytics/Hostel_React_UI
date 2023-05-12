import axios from "axios";
import { toast } from "react-toastify";
import { getExpense, getUserExpenses } from "store/Slices/expenses";

export const addExpenses = (newValues,setShow) => {
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:9000/api/v1/userExpense`,newValues
      );
      if(response?.status === 200){
        toast("Expense Added Successfully")
        dispatch(getAllExpenses())
        setShow(false)
      }
    };
  };

  export const getAllExpenses = () => {
    return async (dispatch) => {
      const response = await axios.get(
        `http://localhost:9000/api/v1/userExpenses`
      );
      if(response?.status === 200){
         dispatch(getUserExpenses(response?.data))
      }
    };
  };

  export const viewExpense = (id) => {
    return async (dispatch) => {
      const response = await axios.get(
        `http://localhost:9000/api/v1/userExpense/${id}`
      );
      if(response?.status === 200){
        dispatch(getExpense(response?.data))
      }
    };
  };
  
  export const editExpense = (newValues,setShow) => {
    return async (dispatch) => {
      const response = await axios.put(
        `http://localhost:9000/api/v1/userExpense/${newValues?.id}`,newValues
      );
      if(response?.status === 200){
        toast("Expense Details Edited Successfully")
        dispatch(getAllExpenses())
        setShow(false)
      }
    };
  };
  
  export const deleteExpense = (data,setShow) => {
    return async (dispatch) => {
      const response = await axios.delete(
        `http://localhost:9000/api/v1/userExpense/delete/${data}`
      );
      if(response?.status === 200){
        toast("Expense Details Deleted Successfully")
        dispatch(getAllExpenses())
        setShow(false)
      }
    };
  };
