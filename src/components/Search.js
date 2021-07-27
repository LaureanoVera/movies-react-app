import React, { useState } from "react";
import styles from "./Search.module.css";
import { ImSearch } from "react-icons/im";
import { useHistory } from "react-router";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search="+searchValue)
    setSearchValue("")
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <ImSearch color="#000" className={styles.searchButtonIcon} />
        </button>
      </div>
    </form>
  );
};
