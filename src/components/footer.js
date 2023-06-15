import React, { useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Footer({ type }) {
  const { valid, setValid, step, setStep, setConfirmed, select } =
    useContext(Context);
  const navigate = useNavigate();

  const handleNext = () => {
    if (valid) {
      if (!(step === 1 && select.every((item) => item.selected === false))) {
        if (step !== 3) {
          setStep(step + 1);
        }
      }
      if (step == 3) {
        setConfirmed(true);
      }
    }
  };

  const handleBack = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    setValid(valid);
    switch (step) {
      case 0:
        navigate("/multi-step-form/");
        break;
      case 1:
        navigate("/multi-step-form/select");
        break;
      case 2:
        navigate("/multi-step-form/pick");
        break;
      case 3:
        navigate("/multi-step-form/finish");
        break;
      default:
        break;
    }
  }, [step]);

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  return (
    <Foter>
      <BackButton
        style={{ display: step == 0 ? "none" : "initial" }}
        onClick={handleBack}
      >
        GO BACK
      </BackButton>
      <NextButton type={JSON.stringify({ type })} onClick={handleNext}>
        {step === 3 ? "CONFIRM" : "NEXT STEP"}
      </NextButton>
    </Foter>
  );
}

export default Footer;

const Foter = styled.div`
  width: 100%;
  position: fixed;
  background-color: "#FFF";
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px max(10px, 10vw);
  bottom: 0;
  left: 0;
  button {
    cursor: pointer;
  }
  @media only screen and (min-width: 1000px) {
    position: absolute;
    width: 95%;
    left: auto;
    padding: 20px;
    bottom: 10px;
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
