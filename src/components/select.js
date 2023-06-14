import React, { useState } from "react";
import Board from "../styled-components/board.styled";
import Footer from "./footer";
import styled from "styled-components";
import { useEffect } from "react";

import { Context } from "../context";
import { useContext } from "react";

function Select() {
  const { select, setSelect } = useContext(Context);

  return (
    <Board>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <SelectDiv>
        {select.map((item, index) => {
          return (
            <div
              key={Math.random()}
              onClick={() => {
                {
                  select.map((item) => (item.selected = false));
                }
                const clone = [...select];
                clone[index].selected = !clone[index].selected;
                setSelect(clone);
              }}
              style={{
                borderColor: item.selected == true ? "#483EFF" : "#d6d9e6",
                backgroundColor: item.selected == true ? "#EFF5FF" : "#FFF",
              }}
            >
              <img src={item.src} />
              <aside>
                <h4>{item.h4}</h4>
                <h5>{item.h5}</h5>
              </aside>
            </div>
          );
        })}
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
