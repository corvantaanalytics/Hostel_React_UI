import axios from "axios";
import { toast } from "react-toastify";
import { getServiceApartment, getServiceApartments } from "store/Slices/serviceApartmentsSlice";

export const getAllServiceApartments = () => {
  return async (dispatch) => {
    const REACT_API_BASE_URL = sessionStorage.getItem("URL");
    const response = await axios.get(
      `${REACT_API_BASE_URL}/api/v1/apartments`,
    );
    dispatch(getServiceApartments(response?.data));
  };
};

export const addServiceApartment = (newValues,setShow) => {
  return async (dispatch) => {
    const REACT_API_BASE_URL = sessionStorage.getItem("URL");
    const response = await axios.post(
      `${REACT_API_BASE_URL}/api/v1/apartment`,newValues
    );
    if(response?.status === 200){
      toast("ServiceApartment Added Successfully")
      dispatch(getAllServiceApartments())
      setShow(false)
    }
  };
};

export const viewServiceApartment = (id) => {
  return async (dispatch) => {
    const REACT_API_BASE_URL = sessionStorage.getItem("URL");
    const response = await axios.get(
      `${REACT_API_BASE_URL}/api/v1/apartments/${id}`
    );
    if(response?.status === 200){
      dispatch(getServiceApartment(response?.data))
    }
  };
};

export const editServiceApartment = (newValues,setShow) => {
  return async (dispatch) => {
    const REACT_API_BASE_URL = sessionStorage.getItem("URL");
    const response = await axios.put(
      `${REACT_API_BASE_URL}/api/v1/apartment/${newValues?.id}`,newValues
    );
    if(response?.status === 200){
      toast("Service Apartment Edited Successfully")
      dispatch(getAllServiceApartments())
      setShow(false)
    }
  };
};

export const deleteServiceApartment = (data,setShow) => {
  return async (dispatch) => {
    const REACT_API_BASE_URL = sessionStorage.getItem("URL");
    const response = await axios.delete(
      `${REACT_API_BASE_URL}/api/v1/apartment/delete/${data}`
    );
    if(response?.status === 200){
      toast("Service Apartment Deleted Successfully")
      dispatch(getAllServiceApartments())
      setShow(false)
    }
  };
};