import { IS_WINDOW_LOADED } from './';

export const getStorageItem = (keyName: string): any => {
  if (IS_WINDOW_LOADED) {
    try {
      return JSON.parse(localStorage.getItem(keyName) || 'null');
    } catch (error) {
      return null;
    }
  }

  return null;
};

export const setStorageItem = (keyName: string, value: any) => {
  if (IS_WINDOW_LOADED) {
    localStorage.setItem(keyName, JSON.stringify(value));
  }
};

export const removeStorageItem = (keyName: string) => {
  if (IS_WINDOW_LOADED) {
    localStorage.removeItem(keyName);
  }
};
