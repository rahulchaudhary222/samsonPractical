import React, { useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Getusers, fetchUserData } from "./actions";
import { SELECTCONTACT, atoz, ztoa } from "../../redux/actions/getUsers";
import { useHistory } from "react-router-dom";
import { Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const Dispatch = useDispatch();
  const users = useSelector((state) => state.userData.users);

  useEffect(() => {
    if (users.length === 0) {
      Dispatch(fetchUserData());
    }
  }, []);

  const selectUser = (id) => {
    Dispatch(SELECTCONTACT(id));
    history.push("/contact");
  };
  const handleDropDown = (e) => {
    if (e.target.value === "A") {
      console.log("atoz");
      Dispatch(atoz());
    }
    if (e.target.value === "Z") {
      console.log("atoz");
      Dispatch(ztoa());
    }
    console.log("err");
  };

  return (
    <div className="userListWrapper">
      {users.map((item) => (
        <ListItem
          name={item.first_name}
          lastname={item.last_name}
          id={item.id}
          imageUrl={item.avatar}
          key={item.id}
          onselect={selectUser}
          type="all"
        />
      ))}
    </div>
  );
};
export default HomePage;
