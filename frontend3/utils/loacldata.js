

export const GET_LOCAL = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const SET_LOCAL = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const REMOVE_LOCAL = (key) => {
  return localStorage.removeItem(key);
};

export const SSC_DATA = [
  "1",
  "7/2",
  "341",
  "85",
  "26",
  "42",
  "3/4",
  "400",
  "3/4",
  "1",
];
