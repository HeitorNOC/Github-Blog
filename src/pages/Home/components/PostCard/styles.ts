import styled from "styled-components";

export const PostContainer = styled.div`
  width: 416px;
  height: 260px;
  
  display: flex;

`



export const PostCardContainer = styled.div`
  background-color: ${props => props.theme['base-post']};
  gap: 32px;

  display: grid;
  align-items: center;
  
  max-width: 416px;
  max-height: 260px;
  padding: 32px;
  border-radius: 10px;
  line-height: 160%;
  font-family: 'Nunito';
  
`

export const PostCardContainerUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${props => props.theme['base-title']};

  h4 {
    font-size: 20px;
    font-weight: 700;
    max-width: 283px;
    max-height: 64px;
    
  }

  p {
    font-size: 14px;
    color: ${props => props.theme['base-span']}; 
    margin-top: -25px;
    padding-left: 16px;
    white-space: nowrap;
  }
`

export const PostCardContainerDown = styled.div`
  color: ${props => props.theme['base-text']};

  .markdown {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 352px;
    max-height: 112px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }


`