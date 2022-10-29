import styled from "styled-components";

export const PersonCardContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  
  max-width: 864px;
  max-height: 212px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  margin-top: -88px;
  position: relative;

`

export const Logo = styled.div`
  padding: 32px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const Content = styled.div`
  color: #fff;
  font-family: 'Nunito', sans-serif;
`

export const UpContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${props => props.theme.blue};
    font-size: 12px;
    margin-right: 32px;
  }
`

export const MidContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['base-text']};
  font-size: 16px;
  line-height: 160%;
  margin: 8px 0 24px 0;
`

export const DownContent = styled.div`
  display: flex;
  gap: 24px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 8px;
    }
  }
`