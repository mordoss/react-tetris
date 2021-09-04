import styled from 'styled-components';

type Props = {
  gameOver?: boolean;
};

export const StyledDisplay = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #777;
  width: 120px;
  padding: 0.5em;
  max-height: 3em;
  border-radius: 10px;
  color: ${(props) => (props.gameOver ? '#c32f27' : '#fbf9ff')};
  background: #000;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
`;
