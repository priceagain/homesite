import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import axios from "../../../axios";
import styles from "./Main-Sidebar.module.css";

const useStyles = makeStyles({
  list: {
    width: "100%",
    padding: 30,
  },
  fullList: {
    width: "auto",
  },
});

export default function Main_Sidebar() {
  const classes = useStyles();

  const [list1, setList1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/v1/sidebar");
      setList1(data.data);
    };
    fetchData();
  }, []);
  const [leftSidebar, setLeftSidebar] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftSidebar(!leftSidebar);
  };

  return (
    <div className={styles.main_sidebar}>
      <Button onClick={toggleDrawer}>
        <MenuIcon style={{ fontSize: 32, color: "var(--white-color)" }} />
      </Button>

      <Drawer open={leftSidebar} onClose={toggleDrawer}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <div className={styles.main_sidebar__title}>
            <h1>PRICEAGAIN</h1>
            <span onClick={toggleDrawer}>
              <CloseIcon />
            </span>
          </div>

          <List>
            {list1.map((list, index) => (
              <ListItem button key={list.sidebar_id}>
                <Link
                  className={styles.main_sidebar__link}
                  to={list.sidebar_url}
                >
                  <ListItemText primary={list.sidebar_name} />
                </Link>
              </ListItem>
            ))}
          </List>
          {/* <Divider />
        
        <List>
          {list2.map((list, index) => (
            <ListItem button key={list.name}>
              <Link className={styles.main_sidebar__link} to={list.Link}>
                <ListItemText primary={list.name} />
              </Link>
            </ListItem>
          ))}
        </List> */}
        </div>
      </Drawer>
    </div>
  );
}
