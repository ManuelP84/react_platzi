import "../style/TaskSearch.css"

const TaskSearch = ({searchValue, setSearchValue, loading}) => {

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
      disabled={loading}
      />
    </>
  );
};

export { TaskSearch };
