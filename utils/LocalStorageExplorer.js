export const addToStorage = (storageName, val) => {
  localStorage.setItem(storageName, JSON.stringify(val));
};

export const getFromStorage = (storageName) => {
  const result = !localStorage.getItem(storageName)
    ? []
    : localStorage.getItem(storageName);
  return JSON.parse(result);
};
