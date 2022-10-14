import "../style/TaskSearch.css"

const TaskSearch = ({searchValue, setSearchValue}) => {

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
