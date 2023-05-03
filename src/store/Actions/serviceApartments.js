import axios from "axios";
import { toast } from "react-toastify";
import { getServiceApartments } from "store/Slices/serviceApartmentsSlice";

export const getAllServiceApartments = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/apartments`,
    );
    dispatch(getServiceApartments(response?.data));
  };
};

export const addServiceApartment = (newValues,setShow) => {
  return async (dispatch) => {
    const response = await axios.post(
      `http://localhost:9000/api/v1/apartment`,newValues
    );
    if(response?.status === 200){
      toast("ServiceApartment Added Successfully")
      dispatch(getAllServiceApartments())
      setShow(false)
    }
  };
};