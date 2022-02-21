import React, { useEffect } from "react";
import { Navbar_Bottom, SearchComponent } from "../../components";
import styles from "./SearchPage.module.css";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";

function SearchPage() {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (!isMobile) {
      history.push("/");
    }
  }, []);
  return (
    <div className={styles.searchPage}>
      <div className={styles.searchPage__container}>
        <div className={styles.searchPage}>
          <SearchComponent />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default SearchPage;
