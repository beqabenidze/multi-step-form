import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  max-width: 1000px;
  height: 100%;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    width: 80vw;
    padding: 15px;
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
