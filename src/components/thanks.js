import React from "react";
import Board from "../styled-components/board.styled";
import thanks from "../assets/icon-thank-you.svg";
import styled from "styled-components";

function Thanks() {
  return (
    <Board>
      <ThanksDiv>
        <img src={thanks} />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </ThanksDiv>
    </Board>
  );
}

export default Thanks;

const ThanksDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  img {
    width: 70px;
    margin: auto;
  }
`;
