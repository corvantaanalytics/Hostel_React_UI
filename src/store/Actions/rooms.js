import { getRoom, getRooms } from "store/Slices/roomsSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllRooms = () => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.get(
        `${REACT_API_BASE_URL}/api/v1/rooms`,
      );
      dispatch(getRooms(response?.data));
    };
  };

  export const addRooms = (newValues,setShow) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.post(
        `${REACT_API_BASE_URL}/api/v1/room`,newValues
      );
      if(response?.status === 200){
        toast("Room Added Successfully")
        dispatch(getAllRooms())
        setShow(false)
      }
    };
  };

  export const viewRoom = (id) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.get(
        `${REACT_API_BASE_URL}/api/v1/room/${id}`
      );
      if(response?.status === 200){
        dispatch(getRoom(response?.data))
      }
    };
  };
  
  export const editRoom = (newValues,setShow) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.put(
        `${REACT_API_BASE_URL}/api/v1/room/${newValues?.id}`,newValues
      );
      if(response?.status === 200){
        toast("Room Edited Successfully")
        dispatch(getAllRooms())
        setShow(false)
      }
    };
  };
  
  export const deleteRoom = (data,setShow) => {
    return async (dispatch) => {
      const REACT_API_BASE_URL = sessionStorage.getItem("URL");
      const response = await axios.delete(
        `${REACT_API_BASE_URL}/api/v1/room/delete/${data}`
      );
      if(response?.status === 200){
        toast("Room Deleted Successfully")
        dispatch(getAllRooms())
        setShow(false)
      }
    };
  };