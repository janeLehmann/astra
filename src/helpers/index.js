import React, { useEffect, useState } from 'react';

function getSize() {
  if (typeof window !== `undefined`) {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  }
}

export const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export const validatePhoneNumber = phone => {
  const re = /^79\d{9}$/;

  return re.test(String(phone));
};

export const validateEmail = string => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(string).toLowerCase());
};

export const disableRussianLetters = input => {
  return input.replace(/[А-Яа-яёЁ]/, '');
};

export const disableSpaceEnter = input => {
  return input.replace(/\s/g, '');
};

export const normalizePhone = input => {
  return input.replace(/[^0-9]/g, '');
};

export const isBrowser = () => typeof window !== 'undefined';

export const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    (isBrowser() && window.localStorage.getItem(localStorageKey)) || '',
  );

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue];
};

export const removeDuplicates = (originalArray, prop) => {
  const newArray = [];
  const lookupObject = {};

  for (let i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (let i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

export const getArraysSameItems = (longerArray, array2) => {
  const same = [];

  longerArray.forEach(el1 => {
    if (array2.some(el2 => el2.categories[0].slug === el1.slug)) {
      same.push(el1);
    }
  });

  return same;
};
