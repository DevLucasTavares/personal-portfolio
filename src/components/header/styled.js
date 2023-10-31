import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyled = styled.div`
  height: 10vh;
  width: 100%;
  background-color: ${theme.colors.azul["500"]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media (min-width: 1024px) {
    padding: 10px 20vw 10px 20vw;
  }
`