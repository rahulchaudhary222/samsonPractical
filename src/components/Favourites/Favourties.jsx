import React from "react";
import ListItem from "../ListItem/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { SELECTCONTACT, removeFromFav } from "../../redux/actions/getUsers";
import { useHistory } from "react-router-dom";

const Favourties = () => {
  const history = useHistory();
  const Dispatch = useDispatch();
  const users = useSelector((state) => state.userData.favourties);

  const selectUser = (id) => {
    Dispatch(SELECTCONTACT(id));
    history.push("/contact");
  };
  const handleremove = (id) => {
    Dispatch(removeFromFav(id));
  };

  return (
    <div className="favoriteListWrapper">
      {users.length > 0 &&
        users.map((e) => (
          <ListItem
            name={e.first_name}
            lastname={e.last_name}
            id={e.id}
            imageUrl={e.avatar}
            key={e.id}
            onselect={selectUser}
            type="fav"
            remove={handleremove}
          />
        ))}
      {users.length === 0 && (
        <p>Nothing in favorites, go to home and try adding some...</p>
      )}
    </div>
  );
};
export default Favourties;
