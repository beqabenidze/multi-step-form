import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    border-radius: 10px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    color: white;
    border: 1px solid white;
  }
`;

export default Wrapper;
