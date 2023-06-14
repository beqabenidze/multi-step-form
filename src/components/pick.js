import React from "react";
import Board from "../styled-components/board.styled";
import Footer from "./footer";
import styled from "styled-components";
import { Context } from "../context";
import { useContext } from "react";

function Pick() {
  const { pick, setPick } = useContext(Context);
  return (
    <Board>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <PickDiv>
        {pick.map((item, index) => {
          return (
            <div
              key={Math.random()}
              style={{
                borderColor: item.clicked == true ? "#483EFF" : "#d6d9e6",
                backgroundColor: item.clicked == true ? "#EFF5FF" : "#FFF",
              }}
            >
              <input
                type="checkBox"
                checked={pick[index].clicked}
                onChange={() => {
                  const clone = [...pick];
                  clone[index].clicked = !clone[index].clicked;
                  setPick(clone);
                }}
              ></input>
              <aside>
                <h4>{item.h4}</h4>
                <h5>{item.h5}</h5>
              </aside>
              <span>{item.span}</span>
            </div>
          );
        })}
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
