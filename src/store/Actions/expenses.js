import axios from "axios";
import { toast } from "react-toastify";
import { getUserExpenses } from "store/Slices/expenses";

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