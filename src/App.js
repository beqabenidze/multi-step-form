import { Routes, Route } from "react-router-dom";
import { Context } from "./context";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled-components/GlobalStyles";
import { Helmet } from "react-helmet";
import StepOne from "./pages/stepOne";
import StepTwo from "./pages/stepTwo";
import StepThree from "./pages/stepThree";
import StepFour from "./pages/stepFour";
import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";

const defaultTheme = {
  background: "#EFF5FF",
};

function App() {
  const [step, setStep] = useState(() => {
    const storedStep = localStorage.getItem("step");
    return storedStep ? parseInt(storedStep) : 0;
  });

  const [confirmed, setConfirmed] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth > 1000 ? false : true);
  const [pick, setPick] = useState([
    {
      h4: "Online service",
      h5: "Access to multiplayer games",
      span: "+$1/mo",
      clicked: false,
    },
    {
      h4: "Larger storage",
      h5: "Extra 1TB of cloud save",
      span: "+$2/mo",
      clicked: false,
    },
    {
      h4: "Customizable profile",
      h5: "Custom theme on your profile",
      span: "+$2/mo",
      clicked: false,
    },
  ]);
  const [select, setSelect] = useState([
    { src: arcade, h4: "Arcade", h5: "$9/mo", selected: false },
    { src: advanced, h4: "Advanced", h5: "$12/mo", selected: false },
    { src: pro, h4: "Pro", h5: "$15/mo", selected: false },
  ]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth > 1000 ? setMobile(false) : setMobile(true);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  useEffect(() => {
    const storedStep = localStorage.getItem("step");
    if (storedStep) {
      setStep(JSON.parse(storedStep));
    }
  }, [step]);

  return (
    <Context.Provider
      value={{
        mobile,
        setMobile,
        step,
        setStep,
        confirmed,
        setConfirmed,
        pick,
        setPick,
        select,
        setSelect,
        valid,
        setValid,
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <BodyWrapper>
          <GlobalStyles />
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Routes>
            <Route path="/multi-step-form/" element={<StepOne />} />
            <Route path="/multi-step-form/select" element={<StepTwo />} />
            <Route path="/multi-step-form/pick" element={<StepThree />} />
            <Route path="/multi-step-form/finish" element={<StepFour />} />
          </Routes>
        </BodyWrapper>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;

const BodyWrapper = styled.div`
  height: 100%;
`;
