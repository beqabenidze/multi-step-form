import React, { useState } from "react";
import Wrapper from "../styled-components/wrapper.styled";
import Header from "../components/header";
import Finish from "../components/finish";
import Thanks from "../components/thanks";
import { Context } from "../context";
import { useContext } from "react";

function StepFour() {
  const { confirmed } = useContext(Context);
  return (
    <Wrapper>
      <Header />
      {confirmed ? <Thanks /> : <Finish />}
    </Wrapper>
  );
}

export default StepFour;
