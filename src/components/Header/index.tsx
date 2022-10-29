import { HeaderContainer } from "./styles";
import Cover from '../../assets/Cover.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Cover} />
    </HeaderContainer>
  )
}