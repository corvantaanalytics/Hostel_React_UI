import axios from "axios";
import { getHostellers } from "store/Slices/hostellersSlice";

export const getAllHostellers = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:9000/api/v1/hostellers`,
    );
    dispatch(getHostellers(response?.data));
  };
};