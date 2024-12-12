import axios from "axios";

import {
  setToken as setTokenStorage,
  getToken as getTokenStorage,
} from "./utils";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

const set = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export function setToken(token) {
  setTokenStorage(token);
  set(token);
}

set(getTokenStorage());
