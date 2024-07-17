import style from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={style.searchBox}>
      <label className={style.searchBoxLabel}>
        Find contacts by name
        <input className={style.searchBoxInput} />
      </label>
    </div>
  );
};

export default SearchBox;
