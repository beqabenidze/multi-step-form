import React, { useState } from "react";
import Wrapper from "../styled-components/wrapper.styled";
import Header from "../components/header";
import Finish from "../components/finish";
import Thanks from "../components/thanks";

function StepFour() {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <Wrapper>
      <Header />
      {/* <Finish /> */}
      <Thanks />
    </Wrapper>
  );
}

export default StepFour;
