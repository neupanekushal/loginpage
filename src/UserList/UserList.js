import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul className={styles.ulcss}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
          // kushal (24 years old)
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
