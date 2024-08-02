import Cookie from "js-cookie";

export const getDataFromCookie = (key) => {
  return Cookie.get(key);
};

export const setDataFromCookie = (key, value) => {
  Cookie.set(key, value);
};