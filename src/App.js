import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser/AddUser";
import UserList from "./UserList/UserList";
import { useState, Fragment } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const addUserHandler = (userInfo) => {
    setAllData((prevData) => {
      return [...prevData, userInfo];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={allData} />
    </Fragment>
  );
}

export default App;

/**
 * What we will do in this app
 * 1. Components, State, Props
 * 2. popups, refrences, Fragments
 *
 * //////////
 *
 * 1. Card
 * 2. Button
 * 3. Form-add
 * 4. List
 */
