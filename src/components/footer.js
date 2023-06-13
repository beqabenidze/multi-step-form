import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foter>
      <BackButton>GO BACK</BackButton>
      <NextButton>NEXT STEP</NextButton>
    </Foter>
  );
}

export default Footer;

const Foter = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px max(10px, 10vw);
  bottom: 0;
  left: 0;
  @media only screen and (min-width: 1000px) {
    position: absolute;
    width: 95%;
    left: auto;
    padding: 20px;
    bottom: 40px;
    right: 20px;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  width: 100px;
  outline: none;
  border: 1px solid transparent;
  color: grey;
  padding: 10px 20px;
  border-radius: 5px;
`;
const NextButton = styled.button`
  background-color: #022959;
  width: 120px;
  outline: none;
  border: 1px solid transparent;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`;
