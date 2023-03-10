import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./Message.module.css";
import Card from "./Card";

const Message = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.message}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default Message;
