import { Content, DownContent, Logo, MidContent, PersonCardContainer, UpContent } from "./styles";
import LogoImg from '../../../../assets/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubProfile } from "../../../../context/githubContext";


export function PersonCard({ 
  avatar_url, name, followers, login, company, bio
 }: GithubProfile) {
  return (
    <PersonCardContainer>
      <Logo>
        <img src={avatar_url} />
      </Logo>
      <Content>
        <UpContent>
          <h2>{name}</h2>
          <a href="#">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294F8"/> </a>
        </UpContent>
        <MidContent>
          <p>{bio}</p>
        </MidContent>
        <DownContent>
          <div>
            <FontAwesomeIcon icon={faGithub} color="#3A536B"/>
            <p>{login}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} color="#3A536B"/>
            <p>{company}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B"/>
            <p>{followers } seguidores</p>
          </div>
        </DownContent>
      </Content>
    </PersonCardContainer>
    
  )
}