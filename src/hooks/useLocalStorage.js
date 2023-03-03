import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(() => {
    const storedJsonValue = localStorage.getItem(key);
    if (storedJsonValue !== null) {
      return JSON.parse(storedJsonValue);
    }
    return initialValue;
  });

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [key, value]
  );

  return [value, setValue];
};
