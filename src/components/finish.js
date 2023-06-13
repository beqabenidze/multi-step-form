import React from "react";
import Board from "../styled-components/board.styled";
import Footer from "./footer";
import styled from "styled-components";

function Finish({ setConfirmed }) {
  return (
    <Board>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <FinishDiv>
        <div>
          <h4>Arcade (Monthly)</h4>
          <span>+$9/mo</span>
        </div>
        <hr></hr>
        <div>
          <h5>Online service</h5>
          <span>+$1/mo</span>
        </div>
        <div>
          <h5>Online service fedge</h5>
          <span>+$2/mo</span>
        </div>
        <aside>
          <h5>Total (per month)</h5>
          <span>+$12/mo</span>
        </aside>
      </FinishDiv>
      <Footer />
    </Board>
  );
}

export default Finish;

const FinishDiv = styled.div`
  position: relative;
  background-color: #f8f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  div {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  aside {
    background-color: white;
    bottom: -100px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    height: 0.03vh;
    background-color: #9699aa;
    border: none;
    width: 90%;
  }
  input {
    width: 20px;
    height: 20px;
  }

  h4 {
    color: #022959;
  }
  h5 {
    color: #9699aa;
  }
  span {
    color: #483eff;
  }
`;
