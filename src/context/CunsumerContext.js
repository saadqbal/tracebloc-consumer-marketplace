import React, { createContext, useReducer } from "react";
import axios from "axios";


export const ConsumerContext = createContext();
const LOGIN = "login";
const ERROR = "error";
const WEB3_CONNECT = 'web3_connect';
const OCEAN_CONFIG = 'configure_ocean';
const OCEAN_ASSETS = 'assets_list';

const initialState = {
  web3: null,
  ocean: null,
  assets: []
};
const reducer = (currentState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...currentState, user: payload, error: null };
    case WEB3_CONNECT:
      return { ...currentState, web3: payload };
    case OCEAN_CONFIG:
      return { ...currentState, ocean: payload };
    case OCEAN_ASSETS:
        return { ...currentState, assets: payload};
    case ERROR:
      return { ...initialState, error: payload };
      default:
          return { ...currentState }
  }
};

export const ConsumerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setWeb3Connect = (web3) => {

    if (web3) {
      dispatch({ type: WEB3_CONNECT, payload: web3 });
    } else {
      dispatch({ type: ERROR, payload: 'Web3 is not connected' });
    }

  }

  const setOceanConfig = (ocean) => {

    if (ocean) {
      dispatch({ type: OCEAN_CONFIG, payload: ocean });
    } else {
      dispatch({ type: ERROR, payload: 'ocean configuration failed' });
    }

  }

  const setAssets = (assets) => {

    if (assets) {
      dispatch({ type: OCEAN_ASSETS, payload: assets });
    } else {
      dispatch({ type: ERROR, payload: 'ocean configuration failed' });
    }

  }

  const login = (credentials) => {
    axios
      .post("/users/login", credentials)
      .then((data) => {
        const user = data.data;
        localStorage.setItem("token", user.token);
        dispatch({ type: LOGIN, payload: user });
      })
      .catch((error) => {
        console.log("ERROR", error.response.data.error);
        dispatch({ type: ERROR, payload: error.response.data.error });
      });
  };

  return (
    <ConsumerContext.Provider
      value={{
        state,
        login,
        setWeb3Connect,
        setOceanConfig,
        setAssets
      }}
    >
      {children}
    </ConsumerContext.Provider>
  );
};

