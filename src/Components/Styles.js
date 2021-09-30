/* eslint-disable linebreak-style */

import styled from "styled-components";

const Header = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 59px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 11px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
`;

const Chats = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  padding-right: 15px;
  margin-left: 15px;
  flex-wrap: wrap;
  min-width: 0;
  font-family: "Roboto", sans-serif;
`;

const ChatLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: "Roboto", sans-serif;
`;

const Name = styled.div`
  color: var(--primary);
  font-size: 16px;
`;

const Date = styled.div`
  color: var(--gray);
  font-size: 12px;
`;

const LastMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  .Message {
    font-size: 14px;
  }
  > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    color: var(--gray);
  }
`;

const SpanId = styled.span`
  display: none;
`;
const SubmitButton = styled.button`
  margin-left: 400px;
  width: 125px;
  height: 63px;
  margin-top: 10px;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 8px;
  border: 1px solid #000000;
  box-sizing: border-box;
  background: #ffffff;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
`;

export {
  Header,
  Container,
  Chats,
  ChatLine,
  Name,
  SpanId,
  Date,
  LastMessage,
  SubmitButton,
};
