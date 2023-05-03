import axios from "axios";
import { toast } from "react-toastify";
import { getLocations } from "store/Slices/locationSlice";

export const getAllLocations = () => {
    return async (dispatch) => {
      const response = await axios.get(
        `http://localhost:9000/api/v1/locations`,
      );
      dispatch(getLocations(response?.data));
    };
  };

  export const addLocation = (newValues,setShow) => {
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:9000/api/v1/location`,newValues
      );
      if(response?.status === 200){
        toast("Location Added Successfully")
        dispatch(getAllLocations())
        setShow(false)
      }
    };
  };