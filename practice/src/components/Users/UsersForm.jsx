import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./UserForm.module.css";
import Message from "../UI/Message";

const UsersForm = (props) => {
  const nameInputRef = useRef();
  const commentInputRef = useRef();
  const ageInputRef = useRef();
  const [message, setMessage] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredUserComment = commentInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserComment.trim().length === 0
    ) {
      setMessage({
        title: "Invalid input",
        msg: "Please enter a valid name, age or comment",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setMessage({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    setMessage({
      title: "Succes",
      msg: "You succesfully added " + enteredName + " to your table. ",
    });
    props.onAddUser(enteredName, enteredUserAge, enteredUserComment);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    commentInputRef.current.value = "";
  };
  const messageHandler = () => {
    setMessage(null);
  };
  return (
    <>
      {message && (
        <Message
          onConfirm={messageHandler}
          title={message.title}
          msg={message.msg}
        />
      )}
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
    </>
  );
};

export default UsersForm;
