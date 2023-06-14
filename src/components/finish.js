import React, { useState } from "react";
import Board from "../styled-components/board.styled";
import Footer from "./footer";
import styled from "styled-components";
import { Context } from "../context";
import { useContext } from "react";
import { useEffect } from "react";

function Finish() {
  const context = useContext(Context);
  const clicked = context.pick.filter((item) => item.clicked == true);
  const selected = context.select.filter((item) => item.selected == true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let updatedTotal = 0;

    selected.forEach((item) => {
      updatedTotal += parseInt(item.h5.match(/\d+/)[0]);
    });

    clicked.forEach((item) => {
      updatedTotal += parseInt(item.span.match(/\d+/)[0]);
    });

    setTotal(updatedTotal);
  }, [selected]);

  return (
    <Board>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <FinishDiv>
        {selected.map((item) => {
          return (
            <div key={Math.random()}>
              <h4>{item.h4} (Monthly)</h4>
              <span>{item.h5}</span>
            </div>
          );
        })}

        <hr></hr>
        {clicked.map((item) => {
          return (
            <div key={Math.random()}>
              <h5>{item.h4}</h5>
              <span>{item.span}</span>
            </div>
          );
        })}

        <aside>
          <h5>Total (per month)</h5>
          <span>{`+$${total}/mo`}</span>
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
