import React, { useState } from "react";
import styles from "./SearchComponent.module.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../../../axios";
import { useHistory } from "react-router";

function SearchComponent() {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState();

  const changeHandler = async (e) => {
    setSearchValue(e.target.value);
    const key = e.target.value;
    if (key.length === 0) {
      return setSearchData([]);
    }
    const { data } = await axios.post("/api/v1/search", {
      key: key,
    });
    if (data.status == 1) {
      setSearchData(data.data);
    }
  };

  const handleClickLink = (e, type, name, id) => {
    e.preventDefault();
    history.push(`/${type}/${name}/${id}/`);
    setSearchData([]);
    setSearchValue("");
  };

  return (
    <div className={styles.searchComponent}>
      <div className={styles.searchComponent__input}>
        <SearchIcon />
        <input
          value={searchValue}
          onChange={(e) => changeHandler(e)}
          type="text"
          placeholder="Search by brand or Products"
        />
      </div>
      <ul className={styles.searchComponent__dataResults}>
        {searchData &&
          searchData.map((data, index) => (
            <li
              key={index}
              onClick={(e) => handleClickLink(e, data.type, data.name, data.id)}
            >
              <p>{data.name}</p>
              <span>{data.type}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
