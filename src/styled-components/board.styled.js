import styled from "styled-components";

const Board = styled.div`
  background-color: red;
  width: 90%;
  background-color: white;
  border-radius: 10px;
  position: relative;
  top: -70px;
  padding: 40px 20px;
  @media only screen and (min-width: 1000px) {
    width: 70%;
    top: 0;
  }
  h1 {
    color: #022959;
  }
  p {
    color: grey;
    margin: 20px 0;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
  }
`;

export default Board;
