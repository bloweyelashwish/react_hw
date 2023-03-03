export const debounce = (callback, delay = 150) => {
  let timeout;
  return (...args) => {
    console.log(...args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
