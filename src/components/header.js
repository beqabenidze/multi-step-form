import React from "react";
import styled from "styled-components";
import { Context } from "../context";
import { useContext } from "react";
import bgMobile from "../assets/bg-sidebar-mobile.svg";
import bgDesktop from "../assets/bg-sidebar-desktop.svg";

const pages = [
  { num: "1", step: "step 1", title: "YOUR INFO" },
  { num: "2", step: "step 2", title: "SELECT PLAN" },
  { num: "3", step: "step 3", title: "ADD-ONES" },
  { num: "4", step: "step 4", title: "SUMMARY" },
];

function Header() {
  const context = useContext(Context);
  const { step } = useContext(Context);

  return (
    <BgWrapper>
      <img src={context.mobile ? bgMobile : bgDesktop} />
      <PageWrapper>
        {pages.map((page, index) => {
          return (
            <div key={Math.random()}>
              <section
                style={{
                  backgroundColor: step == index ? "#BEE2FD" : null,
                  color: step == index ? "black" : "white",
                }}
              >
                {page.num}
              </section>
              <aside>
                <span>{page.step}</span>
                <h3>{page.title}</h3>
              </aside>
            </div>
          );
        })}
      </PageWrapper>
    </BgWrapper>
  );
}

export default Header;

const BgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100%;
  @media only screen and (min-width: 1000px) {
    justify-content: initial;
    width: 35%;
    max-width: 300px;
    padding: 10px;
    border-radius: 10px;
  }
  img {
    width: 100vw;
    max-height: 200px;
    object-fit: cover;
    @media (min-width: 1000px) {
      height: auto;
      max-height: none;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;
const PageWrapper = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: fit-content;
  @media only screen and (min-width: 1000px) {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
    gap: 40px;
    top: 50px;
    left: 40px;
  }
  div {
    display: flex;
    height: 50px;
    gap: 10px;
    section {
    }
    span {
      color: #abbcff;
    }
    h3 {
      color: white;
    }
  }
  aside {
    display: none;
    @media only screen and (min-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
