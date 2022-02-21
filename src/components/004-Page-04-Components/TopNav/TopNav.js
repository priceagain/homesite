import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./TopNav.module.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 210,
    marginRight: 16,
  },
}));

function TopNav({ setSelectedCategory, selectedCategory }) {
  const classes = useStyles();
  const categoryList = useSelector((state) => state.categoryList);

  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__container}>
        <div className={styles.topnav__previous_page}>
          <Link to="/" className={styles.topnav__previous_page_link}>
            Home / All Stores
          </Link>
        </div>

        <div className={styles.topnav__right_content}>
          <div className={styles.topnav__text_content}>Browse Categories</div>

          <div className={styles.topnav__dropdown}>
            <FormControl className={classes.formControl}>
              <InputLabel>Browse Categories</InputLabel>
              <Select
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                {categoryList.categoryList &&
                  categoryList?.categoryList.data.map((category, index) => (
                    <MenuItem key={index} value={category.category_id}>
                      {category.category_name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
