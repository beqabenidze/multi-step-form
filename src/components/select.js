import React from "react";
import Board from "../styled-components/board.styled";
import Footer from "./footer";
import styled from "styled-components";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

function Select() {
  return (
    <Board>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <SelectDiv>
        <div>
          <img src={arcade} />
          <aside>
            <h4>Arcade</h4>
            <h5>$9/mo</h5>
          </aside>
        </div>
        <div>
          <img src={advanced} />
          <aside>
            <h4>Arcade</h4>
            <h5>$12/mo</h5>
          </aside>
        </div>
        <div>
          <img src={pro} />
          <aside>
            <h4>Arcade</h4>
            <h5>$15/mo</h5>
          </aside>
        </div>
      </SelectDiv>
      <Footer />
    </Board>
  );
}

export default Select;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    gap: 15px;
    border: 1px solid #d6d9e6;
  }
  aside {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }
  h4 {
    color: #022959;
  }
  h5 {
    color: #9699aa;
  }
`;
