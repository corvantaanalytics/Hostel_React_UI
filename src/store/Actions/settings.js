import { Key } from "iconsax-react";
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';

import {
  getOpenAIKeyDispatch,
  getUserDetailsDispatch,
  setSettingsLoading,
} from "store/Slices/settingsSlice";


export const getUserDetails = () => {
  return async (dispatch, getState) => {
    const currentToken = sessionStorage.getItem("token");
    dispatch(setSettingsLoading(true));
    try {
      const response = await fetch(
        `apilinkusers/me`,
        {
          method: "GET",
          headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${currentToken}`,
            "x-api-key": "qwertyuioasdfghjklzxcvbnm",
          }),
        }
      );
      const res = await response.json();
      await dispatch(getUserDetailsDispatch(res));
      dispatch(setSettingsLoading(false));
    } catch (e) {
      dispatch(setSettingsLoading(false));
    }
  };
};

export const updateName = (full_name, setShow) => {
  return async (dispatch) => {
    const currentToken = sessionStorage.getItem("token");
    const response = await fetch(
      `apilinkusers/me`,
      {
        method: "PUT",
        body: JSON.stringify({
          full_name,
        }),
        headers: new Headers({
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${currentToken}`,
          "x-api-key": "qwertyuioasdfghjklzxcvbnm",
        }),
      }
    );
    if (response?.status === 200) {
      dispatch(getUserDetails());
      setShow(false);
    } else if (response?.status === 429) {
      toast.error("Rate limit exceeded: 5 per 1 minute");
    }
    const res = await response.json();
  };
};

export const updateEmail = (email, setShow) => {
  return async (dispatch) => {
    const currentToken = sessionStorage.getItem("token");
    const response = await fetch(
      `apilinkusers/me`,
      {
        method: "PUT",
        body: JSON.stringify({
          email,
        }),
        headers: new Headers({
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${currentToken}`,
          "x-api-key": "qwertyuioasdfghjklzxcvbnm",
        }),
      }
    );
    if (response?.status === 200) {
      dispatch(getUserDetails());
      setShow(false);
    } else if (response?.status === 429) {
      toast.error("Rate limit exceeded: 5 per 1 minute");
    }
    const res = await response.json();
  };
};

export const UpdatePassword = (password, setShow) => {
  return async (dispatch) => {
    const currentToken = sessionStorage.getItem("token");
    const response = await fetch(
      `apilinkusers/me`,
      {
        method: "PUT",
        body: JSON.stringify({
          password,
        }),
        headers: new Headers({
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${currentToken}`,
          "x-api-key": "qwertyuioasdfghjklzxcvbnm",
        }),
      }
    );
    if (response?.status === 200) {
      dispatch(getUserDetails());
      setShow(false);
    } else if (response?.status === 429) {
      toast.error("Rate limit exceeded: 5 per 1 minute");
    }
    const res = await response.json();
  };
};

export const changeMFAstatus = (setEnableMFA) => {
  return async (dispatch, getState) => {
    const currentToken = sessionStorage.getItem("token");
    const { user } = getState().settings;
    const response = await fetch(
      `apilinkusers/setup-mfa/${user?.id}`,
      {
        method: "PUT",
        headers: new Headers({
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${currentToken}`,
          "x-api-key": "qwertyuioasdfghjklzxcvbnm",
        }),
      }
    );
    if (response?.status === 200) {
      const res = await response.json();
      let img = res?.totp_uri;
      const qrCode = sessionStorage.setItem("qrCode", img);
      setEnableMFA(true);
    } else {
      toast.error("The user doesn't have enough privileges");
    }
  };
};

export const getApiKey = () => {

  return async (dispatch) => {
    const currentToken = sessionStorage.getItem("token");
    const response = await fetch(
      `apilinkopenai/`,
      {
        method: "GET",

        headers: new Headers({
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${currentToken}`,
          "x-api-key": "qwertyuioasdfghjklzxcvbnm",
        }),
      }
    );

    const res = await response.json();
    if (res?.key) {
      sessionStorage.setItem("openAi", res?.key)
      sessionStorage.setItem("apiId", res?.id)
    }
    dispatch(getOpenAIKeyDispatch(res.key));
  };
};

export const updateApiKey = (key,setShow) => {
  return async (dispatch, getState) => {
    const currentToken = sessionStorage.getItem("token");
    const apiId = sessionStorage.getItem("apiId");
    const response = await fetch(
      `apilinkopenai/${apiId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          key,
        }),
        headers: new Headers({
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept":"application/json",
          Authorization: `Bearer ${currentToken}`,
          "x-api-key": "qwertyuioasdfghjklzxcvbnm",
        }),
      }
    );
    if(response?.status === 200){
      dispatch(getApiKey());
      setShow(false);
      toast.success("AI Key Updated")
    }
  };
};
