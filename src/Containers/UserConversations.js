/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import {
  Container,
  Header,
  Chats,
  ChatLine,
  Name,
  LastMessage,
  SpanId,
} from "../Components/Styles";
import UserMessageHeads from "../Components/UserMessageHeads";
import { useStateValue } from "../Context/StateProvider";
import { flatten } from "../Util";

const UserConversations = () => {
  const [{ user }, dispatch] = useStateValue();

  const [conversations, setConversations] = useState([]);

  const fetchUserConversations = async () => {
    const res = await axios("http://34.122.252.114:3000/conversations", {
      headers: {
        user_id: user.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        setConversations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUserConversations();
  }, []);

  return (
    <Main>
      <Header>Your conversations</Header>
      <ContainerMain>
        {conversations.map((entry) => (
          <UserMessageHeads
            key={entry?.id}
            title={entry?.title}
            content={entry.last_message[0]?.content}
            sender={entry.last_message[0]?.sender_name}
          />
        ))}
      </ContainerMain>
    </Main>
  );
};

export default UserConversations;

const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  top: 62px;
  left: 112px;
  justify-content: center;
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-direction: column;
  height: 100%;
  top: 11px;
`;
