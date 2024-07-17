import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      /* eslint-disable-next-line no-console */
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      if (valueToStore === null) {
        // Se o valor fornecido for null, remova o item do localStorage
        window.localStorage.removeItem(key);
      } else {
        // Caso contrário, armazene o valor no localStorage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      setStoredValue(valueToStore);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
