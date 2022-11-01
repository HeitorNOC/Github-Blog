import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { GithubBlogContext } from "../../context/githubContext";
import { PersonCard } from "./components/PersonCard";
import { PostCard } from "./components/PostCard";
import { HomeContainer, InputContainer, PostContainerMain } from "./styles";

import *  as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {

  const profile = useContextSelector(GithubBlogContext, (context) => {
    return context.profile
  })

  const issuesCount = useContextSelector(GithubBlogContext, (context) => {
    return context.totalCountIssues
  })

  /* const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  }) */

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  return (

    <div>
      <Header />
      {
        !profile ? (
          <h1>Loading</h1>
        ) : (
          <HomeContainer>
            <PersonCard
              avatar_url={profile.avatar_url}
              bio={profile.bio}
              company={profile.company}
              followers={profile.followers}
              login={profile.login}
              name={profile.name}
              
            />
            <div className="main">

              <div className="beforePosts">
                <h2>Publicações</h2>
                <p>{issuesCount} publicações</p>
              </div>
              <InputContainer  /* onSubmit={handleSubmit(handleSearchTransactions)} */>
                <input
                  type="text"
                  placeholder="Buscar conteúdo"
                  {...register('query')}
                />
              </InputContainer>
              <PostContainerMain>
                <PostCard />
              </PostContainerMain>
            </div>

          </HomeContainer>
        )
      }

    </div>

  )
}