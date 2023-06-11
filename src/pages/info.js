import React from "react";
import StepOne from "../components/stepOne";
import Wrapper from "../styled-components/wrapper.styled";
import Header from "./header";

function Info() {
  return (
    <Wrapper>
      <Header />
      <StepOne />
    </Wrapper>
  );
}

export default Info;
