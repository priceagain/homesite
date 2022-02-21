import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsTopNav.module.css";
import axios from "../../../axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 210,
    marginRight: 16,
  },
}));

function ProductsTopNav({ setSelectedCategory, selectedCategory }) {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get("/api/v1/category");
      setCategories(data.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__container}>
        <div className={styles.topnav__previous_page}>
          <Link to="/" className={styles.topnav__previous_page_link}>
            Home /
          </Link>
          All Products
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
                {categories.map((item, index) => (
                  <MenuItem key={index} value={item.category_id}>
                    {item.category_name}
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

export default ProductsTopNav;
