import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { GithubBlogContext } from "../../context/githubContext";
import { PersonCard } from "./components/PersonCard";
import { PostCard } from "./components/PostCard";
import { HomeContainer } from "./styles";

export function Home() {

  const profile = useContextSelector(GithubBlogContext, (context) => {
    return context.profile
  })


  console.log(profile)
  return (

    <div>
      <Header />
      {
        !profile ? (
          <h1>Loading</h1>
        ) : (
          <HomeContainer>
            <PersonCard
              avatar_url={profile?.avatar_url}
              bio={profile?.bio}
              company={profile?.company}
              followers={profile?.followers}
              login={profile?.login}
              name={profile?.name}
            />
            <div className="beforePosts">
              <h2>Publicações</h2>
              <p>6 publicações</p>
            </div>
            <PostCard />
          </HomeContainer>
        )
      }

    </div>

  )
}