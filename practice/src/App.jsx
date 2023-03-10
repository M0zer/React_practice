import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import UsersForm from "./components/Users/UsersForm";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uComment) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, comment: uComment ,id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <UsersForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
