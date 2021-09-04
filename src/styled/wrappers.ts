import styled from 'styled-components';

const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  div {
    background-size: cover;
    height: 100%;
  }
`;

const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1em 1em;
  margin: 0 auto;
  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
    max-height: 150px;
  }
`;

export { StyledTetrisWrapper, StyledTetris };
