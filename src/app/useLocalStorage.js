import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);
    //console.log("outside the effect");  //Test
    //console.log(loading);  //Test
    //console.log(item);  //Test
    //console.log(loading);  //Test
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          //console.log("inside the effect"); //Test
          setItem(parsedItem);
          //console.log(item);  //Test
          setLoading(false);
          //console.log(loading)  //Test
        } catch (error) {
          setError(error);
        }
      }, 1000);
    }, []);
  
    const saveItem = (newItem) => {
      // Save in LocalSorage and update the state
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  };

  export { useLocalStorage }