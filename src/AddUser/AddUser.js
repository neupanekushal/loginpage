import "./AddUser.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState, Fragment, useRef } from "react";
//import ErrorModal from "../ErrorModal/ErrorModal";
const AddUser = (props) => {
  const [username, setUserName] = useState("");
  //const [userage, setUserAge] = useState("");
  //const [error, setError] = useState();
  const [isValid, setIsValid] = useState(true);

  // useRef

  const nameRef = useRef();
  const ageRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const finalName = nameRef.current.value;
    const finalAge = ageRef.current.value;

    if (finalName.trim().length === 0 || finalAge.trim().length === 0) {
      //setError({
      //  title: "Invalid Input",
      //  message: "Please enter valid non blank data",
      //  });

      setIsValid(false);
      return;
    }
    if (parseInt(finalAge) < 1) {
      // setError({
      //title: "Invalid age",
      //message: "Please enter the age above 0(age>0)",
      //});
      return;
    }
    const userData = {
      name: finalName,
      age: finalAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);

    // setUserName("");

    //setUserAge("");
    setIsValid(true);

    console.log(finalName, finalAge);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  // name

  // const nameChangeHandler = (event) => {
  // setUserName(event.target.value);
  //};

  //const ageChangeHandler = (event) => {
  // setUserAge(event.target.value);
  // };
  // const errorHandler = () => {
  // setError(null);
  // };

  return (
    <Fragment>
      {/*error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      ) : (
        ""
      )*/}

      <Card className={`input ${!isValid ? "invalid" : ""}`}>
        <form onSubmit={SubmitHandler}>
          <label
            htmlFor="finalName"
            // style={{ color: !isValid ? "red" : "black" }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            ref={nameRef}
            // onChange={nameChangeHandler}
            // value={username}
          />
          <label htmlFor="age">Age(in years)</label>
          <input
            type="number"
            id="age"
            ref={ageRef}
            // onChange={ageChangeHandler}
            // value={userage}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
