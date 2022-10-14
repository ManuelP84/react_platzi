import React, { useContext } from "react";
import { Context } from "../context/storeProvider";
import "../style/TaskSearch.css"

const TaskSearch = () => {

  const {searchValue, setSearchValue} = useContext(Context);
  const onChangeText = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <>
      <input 
      className="TaskSearch" 
      placeholder="Cebolla" 
      value={searchValue}
      onChange={(e) => onChangeText(e)}
      />
    </>
  );
};

export { TaskSearch };
