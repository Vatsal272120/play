/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Users from "../Components/Users";
import { Header, SubmitButton } from "../Components/Styles";

const Welcome = () => {
  const history = useHistory();
  const [apiData, setapiData] = useState([]);

  const fetchApiData = async () => {
    const res = await axios
      .get(process.env.REACT_APP_API_CONTACTS)
      .then((response) => {
        setapiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const handleClick = (e) => {
    console.log("redirecting");
    history.push("/my-conversations");
  };
  return (
    <Main>
      <Header>Let us know who you are</Header>
      <ContainerMain>
        {apiData.map((entry) => (
          <Users name={entry.name} id={entry.id} key={entry.id} />
        ))}
      </ContainerMain>
      <SubmitButton onClick={handleClick}>Continue</SubmitButton>
    </Main>
  );
};

export default Welcome;

const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  top: 40px;
  left: 30%;
  margin: auto;
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
