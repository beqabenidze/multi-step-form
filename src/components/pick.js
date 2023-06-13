import React from "react";
import Board from "../styled-components/board.styled";
import Footer from "./footer";
import styled from "styled-components";

function Pick() {
  return (
    <Board>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <PickDiv>
        <div>
          <input type="checkBox"></input>
          <aside>
            <h4>Online service</h4>
            <h5>Access to multiplayer games</h5>
          </aside>
          <span>+$1/mo</span>
        </div>
        <div>
          <input type="checkBox"></input>
          <aside>
            <h4>Larger storage</h4>
            <h5>Extra 1TB of cloud save</h5>
          </aside>
          <span>+$2/mo</span>
        </div>
        <div>
          <input type="checkBox"></input>
          <aside>
            <h4>Customizable profile</h4>
            <h5>Custom theme on your profile</h5>
          </aside>
          <span>+$2/mo</span>
        </div>
      </PickDiv>
      <Footer />
    </Board>
  );
}

export default Pick;

const PickDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    border: 1px solid #d6d9e6;
  }
  input {
    width: 20px;
    height: 20px;
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
  span {
    color: #483eff;
  }
`;
