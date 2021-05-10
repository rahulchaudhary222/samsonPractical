import React from "react";
import Button from "@material-ui/core/Button";
import "./ListItem.css";

const Item = ({ name, lastname, id, imageUrl, onselect, type, remove }) => {
  return (
    <div onClick={() => onselect(id)} className="userListCard">
      <img src={imageUrl} alt="user"></img>
      <span className="user_name">{name}</span>
      <span className="lastname">{lastname}</span>
      {type === "fav" && (
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            remove(id);
            e.stopPropagation();
          }}
        >
          remove
        </Button>
      )}
    </div>
  );
};
export default Item;
