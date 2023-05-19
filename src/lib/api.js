import axios from "axios";
import store from "./../store/index";
// import { REACT_API_BASE_URL } from '@env';

const REACT_API_BASE_URL = "http://localhost:9000";
sessionStorage.setItem("URL","http://localhost:9000")
const X_API_KEY = "qwertyuioasdfghjklzxcvbnm";
/**
 * API service methods to make life easier
 */
export const API = {
  /**
   * Execute a query
   * @param url
   * @param method
   * @param body
   * @returns
   */
  execute: async (url, method = "GET", data = null) => {
    let body = null;
    let value = null;
    if (data) {
      body = new FormData();
      for (const key in data) {
        // console.log({ key: key, value: data[key], type: typeof (data[key]) });
        value = data[key];
        if (typeof value == "object") {
          var fileURI = value.path;
          let filename = fileURI.split("/").pop();
          body.append("image", {
            uri: fileURI,
            name: filename,
            type: value.mime,
            mime: value.mime,
          });
          // console.log(filename);
        } else {
          body.append(key, data[key]);
        }
      }
    }
    // console.log({ body, data });
    let token = store.getState().auth.token;
    if (!token) {
      token = sessionStorage.getItem("token");
    }

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": X_API_KEY,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    let res = await fetch(`${REACT_API_BASE_URL}${url}`, {
      method: method,
      headers,
      body: data ? JSON.stringify(data) : null,
    });
    return Promise.all([res.status, res.json(), res.ok]);
  },

  /**
   * Process the response after the query has been executed
   * @param res
   * @returns
   */
  processResponse: (res) => {
    if (!res[2]) {
      console.log({ error: res });
      throw new Error(res[1].detail);
    }
    return res[1];
  },

  /**
   * Get list of connected websites
   * @param data imit and skip
   * @returns array of connected websites.
   */
  getConnectedWebsites: async (skip = 0, limit = 100) => {
    let res = await API.execute(
      `income/?skip=${skip}&limit=${limit}&user_id=35`,
      "GET"
    );
    return API.processResponse(res);
  },

  /**
   * Save a new connected website
   * @param data Object containing saving details
   * @returns
   */
  saveAConnectedWebsite: async (data) => {
    let params = new URLSearchParams(data).toString();
    let res = await API.execute(`income?${params}`, "POST", data);
    return API.processResponse(res);
  },

  /**
   * Delete website
   * @param data Object containing saving details
   * @returns
   */
  deleteAConnectedWebsite: async (data) => {
    let res = await API.execute(`income/${data.id}`, "DELETE");
    return API.processResponse(res);
  },

  /**
   * Manage user subscription.
   * @returns Object with {redirect, return} and you redirect the user to redirect for subscription
   */
  manageSubscription: async () => {
    let res = await API.execute(`stripe/expenses`, "GET");
    return API.processResponse(res);
  },

  /**
   * Manage user subscription.
   * @returns Object with {redirect, return} and you redirect the user to redirect for subscription
   */
  allSubscriptionInfo: async () => {
    let res = await API.execute(`stripe/all-subscription-info`, "GET");
    return API.processResponse(res);
  },

  /**
   * Read user information
   * @returns Object of user
   */
  getUserInfo: async () => {
    let res = await API.execute(`users/me`, "GET");
    return API.processResponse(res);
  },

  // Model APIs
  getModels: async (page = 1, limit = 100) => {
    let skip = page - 1;
    let res = await API.execute(`model/?skip=${skip}&limit=${limit}`, "GET");
    return API.processResponse(res);
  },

  createModel: async (data) => {
    let params = new URLSearchParams(data).toString();
    let res = await API.execute(`model/?${params}`, "POST", data);
    return API.processResponse(res);
  },

  updateModel: async (modelId, data) => {
    let res = await API.execute(`model/${modelId}`, "PUT", data);
    return API.processResponse(res);
  },

  getSingleModel: async (id) => {
    let res = await API.execute(`model/single?id=${id}`, "GET");
    return API.processResponse(res);
  },
  deleteAModel: async (data) => {
    let res = await API.execute(`model/${data.id}`, "DELETE");
    return API.processResponse(res);
  },
  trainModel: async (model) => {
    let res = await API.execute(`model/train?model_id=${model.id}`, "POST");
    return API.processResponse(res);
  },

  // Dataset APIs
  getDatasets: async (skip = 0, limit = 20) => {
    let res = await API.execute(`rooms/?skip=${skip}&limit=${limit}`, "GET");
    return API.processResponse(res);
  },
};

export const downloadModelFile = async (model) => {
  let token = store.getState().auth.token;
  if (!token) {
    token = sessionStorage.getItem("token");
  }
  const axiosConfig = {
    responseType: "arraybuffer",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "x-api-key": X_API_KEY,
    },
  };
  let res = await axios.get(
    `${REACT_API_BASE_URL}model/download?id=${model.id}`,
    axiosConfig
  );
  return res;
};
