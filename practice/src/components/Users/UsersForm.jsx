import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./UserForm.module.css";

const UsersForm = (props) => {
  const nameInputRef = useRef();
  const commentInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredUserComment = commentInputRef.current.value;
    props.onAddUser(enteredName, enteredUserAge, enteredUserComment);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input id="username" type="text" ref={nameInputRef} />
        <label>Age (years) </label>
        <input id="age" type="number" ref={ageInputRef} />
        <label>Comment</label>
        <textarea
          id="usercomment"
          name="comment"
          form="usrform"
          ref={commentInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UsersForm;
