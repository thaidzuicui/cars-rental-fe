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
