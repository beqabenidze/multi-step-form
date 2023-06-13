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

const defaultTheme = {
  background: "#EFF5FF",
};

function App() {
  const [mobile, setMobile] = useState(window.innerWidth > 1000 ? false : true);
  useEffect(() => {
    const handleSize = () => {
      window.innerWidth > 1000 ? setMobile(false) : setMobile(true);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return (
    <Context.Provider value={{ mobile, setMobile }}>
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
            <Route path="/" element={<StepFour />} />
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
