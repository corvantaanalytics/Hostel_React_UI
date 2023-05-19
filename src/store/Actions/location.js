import axios from "axios";
import { toast } from "react-toastify";
import { getLocation, getLocations } from "store/Slices/locationSlice";

export const getAllLocations = () => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.get(
        `${REACT_API_BASE_URL}/api/v1/locations`,
      );
      dispatch(getLocations(response?.data));
    };
  };

  export const addLocation = (newValues,setShow) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.post(
        `${REACT_API_BASE_URL}/api/v1/location`,newValues
      );
      if(response?.status === 200){
        toast("Location Added Successfully")
        dispatch(getAllLocations())
        setShow(false)
      }
    };
  };

  export const viewLocation = (id) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.get(
        `${REACT_API_BASE_URL}/api/v1/location/${id}`
      );
      if(response?.status === 200){
        dispatch(getLocation(response?.data))
      }
    };
  };
  
  export const editLocation = (newValues,setShow) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.put(
        `${REACT_API_BASE_URL}/api/v1/location/${newValues?.id}`,newValues
      );
      if(response?.status === 200){
        toast("Location Edited Successfully")
        dispatch(getAllLocations())
        setShow(false)
      }
    };
  };

  export const deleteLocation = (data,setShow) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.delete(
        `${REACT_API_BASE_URL}/api/v1/location/delete/${data}`
      );
      if(response?.status === 200){
        toast("Location Deleted Successfully")
        dispatch(getAllLocations())
        setShow(false)
      }
    };
  };