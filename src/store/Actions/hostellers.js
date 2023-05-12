import axios from "axios";
import { toast } from "react-toastify";
import { getHosteller, getHostellers } from "store/Slices/hostellersSlice";

export const getAllHostellers = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hostellers`,
    );
    dispatch(getHostellers(response?.data));
  };
};

export const addHosteller = (newValues,setShow) => {
  return async (dispatch) => {
    const response = await axios.post(
      `http://localhost:9000/api/v1/hosteller`,newValues
    );
    if(response?.status === 200){
      toast("Hosteller Added Successfully")
      dispatch(getAllHostellers())
      setShow(false)
    }
  };
};

export const viewHosteller = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hosteller/${id}`
    );
    if(response?.status === 200){
      console.log("response",response)
      dispatch(getHosteller(response?.data))
    }
  };
};

export const viewHostellerByLocation = (details) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hosteller/location/${details?.location}`
    );
    if(response?.status === 200){
      dispatch(getHostellers(response?.data))
    }
  };
};

export const viewHostellerByApartment = (details) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hosteller/apartment/${details?.apartment}`
    );
    if(response?.status === 200){
      dispatch(getHostellers(response?.data))
    }
  };
};

export const viewHostellerByLocationAndApartment = (details) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hosteller/${details?.location}/${details?.apartment}`
    );
    if(response?.status === 200){
      dispatch(getHostellers(response?.data))
    }
  };
};


export const editHosteller = (newValues,setShow) => {
  return async (dispatch) => {
    const response = await axios.put(
      `http://localhost:9000/api/v1/hosteller/${newValues?.id}`,newValues
    );
    if(response?.status === 200){
      toast("Hosteller Edited Successfully")
      dispatch(getAllHostellers())
      setShow(false)
    }
  };
};

export const deleteHosteller = (data,setShow) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:9000/api/v1/hosteller/delete/${data}`
    );
    if(response?.status === 200){
      toast("Hosteller Deleted Successfully")
      dispatch(getAllHostellers())
      setShow(false)
    }
  };
};