import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyled = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: ${theme.colors.azul["500"]};
  // background-color: black; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`