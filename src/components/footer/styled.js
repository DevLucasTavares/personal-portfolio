import styled from "styled-components";
import { theme } from "../../styles";

export const FooterStyled = styled.div`
  height: 30vh;
  width: 100%;
  background-color: ${theme.colors.azul["300"]};
  color: white;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  // padding: 10px;

  flex {

  }

  @media (min-width: 800px) {
    height: 20vh
  }

  @media (min-width: 1024px) {
    // padding: 10px 20vw 10px 20vw;
    height: 20vh
  }
`