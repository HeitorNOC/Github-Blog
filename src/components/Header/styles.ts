import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme['base-background']};
  width: 100%;
  
  img {
    display: flex;
    max-width: 1440px;
    max-height: 296px;
    margin: 0 auto;

  }
`