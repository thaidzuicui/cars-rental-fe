import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function parseLocalStorageDate(key, defaultDate) {
  if (
    typeof window === "undefined" ||
    typeof window.localStorage === "undefined"
  )
    return defaultDate;
  const storedDate = window.localStorage.getItem(key);

  if (storedDate && storedDate !== "undefined") {
    return new Date(JSON.parse(storedDate));
  }

  return defaultDate;
}

export function clearLocalStorageItems() {
  localStorage.removeItem("availabilityFrom");
  localStorage.removeItem("availabilityTo");
  localStorage.removeItem("location");
}

export const USER_TOKEN = "USER_TOKEN";

export const setItem = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getItem = (key) => {
  const value = window.localStorage.getItem(key);
  return value === null ? "" : value;
};

export const setToken = (value) => {
  setItem(USER_TOKEN, value);
};

export const clearToken = () => setToken("");

export const getToken = () => getItem(USER_TOKEN);

export const checkToken = () => getToken() !== "";

export function calculateDaysBetweenDates(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);

  // Calculate the time difference in milliseconds
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());

  // Convert milliseconds to days
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff + 1;
}

export function calculateOrderAmount(daysRented, rentPrice) {
  return daysRented * rentPrice;
}
