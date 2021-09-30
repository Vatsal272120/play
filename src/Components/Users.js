/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import Avatar from "@mui/material/Avatar";
import { useStateValue } from "../Context/StateProvider";
import { Container, Chats, ChatLine, Name, LastMessage } from "./Styles";

const Users = ({ name, id }) => {
  const [{ user }, dispatch] = useStateValue();

  const handleClick = (e) => {
    e.preventDefault();
    e.target.style.color = "blue";

    dispatch({ type: "SET_USER", user: { id, name } });
  };

  console.log(user);
  return (
    <Container>
      <Avatar onClick={handleClick} />
      <Chats>
        <ChatLine>
          <Name>{name}</Name>
        </ChatLine>
        <LastMessage>
          <p>Jur.io</p>
        </LastMessage>
      </Chats>
    </Container>
  );
};

export default Users;
