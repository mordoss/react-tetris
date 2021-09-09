import styled from 'styled-components';

// height need to be fixed
const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  background: linear-gradient(to right, #1d4350, #a43931);
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
