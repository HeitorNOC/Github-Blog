import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme['base-background']};
  height: 1800px;
  
  
  .beforePosts {
    padding: 72px 288px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme['base-subtitle']};
    font-family: 'Nunito';
    font-size: 18px;
    line-height: 160%;

    

    p {
      font-size: 14px;
      color: ${props => props.theme['base-span']};
    }
  }

  
`

export const InputContainer = styled.div`
  padding: 0 288px;
  input {
    border: 1px solid #1C2F41;
    border-radius: 6px;
    padding: 12px 16px;
    width: 100%;

    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};

    margin-bottom: 48px;

    &::placeholder {
      color: ${props => props.theme['base-label']};
      
    }
  }
`

export const PostContainerMain = styled.div`
  display: flex;
  padding: 0 288px;
  flex-wrap: wrap;
  gap: 32px;
`