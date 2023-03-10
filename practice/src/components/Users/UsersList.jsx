import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <h3>Name:{user.name} Age:{user.age}</h3>
          <h3>Comment:</h3> 
          <p>{user.comment}</p>
          <Button>Delete</Button>
        </li>
      ))}
    </ul></Card>
  );
};

export default UsersList;
