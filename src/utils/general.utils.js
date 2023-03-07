export const debounce = (callback, delay = 150) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const timeParser = (ms) => {
  const padDigits = (digit) => digit.toString().padStart(2, "0");

  const HH = padDigits(Math.floor(ms / 360000));
  const MM = padDigits(Math.floor((ms % 360000) / 6000));
  const SS = padDigits(Math.floor((ms % 6000) / 100));
  const MS = padDigits(ms % 100);

  return `${HH}:${MM}:${SS}:${MS}`;
};


