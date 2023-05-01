import { getRooms } from "store/Slices/roomsSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllRooms = () => {
    return async (dispatch) => {
      const response = await axios.get(
        `http://localhost:9000/api/v1/rooms`,
      );
      dispatch(getRooms(response?.data));
    };
  };

  export const addRooms = (newValues,setShow) => {
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:9000/api/v1/room`,newValues
      );
      if(response?.status === 200){
        toast("Room Added Successfully")
        dispatch(getAllRooms())
        setShow(false)
      }
    };
  };
  