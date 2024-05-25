
const defaultStorage = window.localStorage;

export const getItemFromStorage = (key, storage = defaultStorage) => storage.getItem(key);