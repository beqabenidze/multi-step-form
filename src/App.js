import { Routes, Route } from "react-router-dom";
import { Context } from "./context";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled-components/GlobalStyles";
import Info from "./components/stepOne";
import { Helmet } from "react-helmet";
import Header from "./components/header";

const defaultTheme = {
  background: "#F2F2F2",
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
            <Route path="/" element={<Info />} />
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
