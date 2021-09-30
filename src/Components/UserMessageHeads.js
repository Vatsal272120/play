/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { Container, Chats, ChatLine, Name, LastMessage } from "./Styles";

const UserMessageHeads = ({ key, title, sender, content }) => (
  <Container>
    <Avatar />
    <Chats>
      <ChatLine>
        <Name>{title}</Name>
      </ChatLine>

      <LastMessage>
        <p className="Message">{sender}</p>
        <p>{content}</p>
      </LastMessage>
    </Chats>
  </Container>
);

export default UserMessageHeads;
