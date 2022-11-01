import { useContextSelector } from "use-context-selector";
import { GithubBlogContext } from "../../../../context/githubContext";
import { PostCardContainer, PostCardContainerDown, PostCardContainerUp, PostContainer } from "./styles";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceStrict } from "date-fns";
import { ptBR } from "date-fns/locale";


export function PostCard() {

  const issue = useContextSelector(GithubBlogContext, (context) => {
    return context.issue
  })

  return (

    <>
      {
        (!issue) ? (
          <h1>loading</h1>
        ) : (
          issue.map(item => {
            return (
              <PostContainer key={item?.updated_at}>
                <PostCardContainer>
                  <PostCardContainerUp>
                    <h4>{item.title}</h4>
                    <p>Há {formatDistanceStrict(new Date(item.updated_at), new Date(), {
                      locale: ptBR,
                      
                    })}</p>
                  </PostCardContainerUp>
                  <PostCardContainerDown>
                    <ReactMarkdown children={item.body} remarkPlugins={[remarkGfm]} className="markdown" />
                  </PostCardContainerDown>
                </PostCardContainer>
              </PostContainer>
            )
          })
        )
      }
    </>

  )
}


