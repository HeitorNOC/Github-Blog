import { InputContainer, PostCardContainer, PostCardContainerDown, PostCardContainerUp, PostContainer } from "./styles";
import *  as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function PostCard() {

  /* const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  }) */

  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting }
   } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  return (
    <PostContainer>
      <InputContainer  /* onSubmit={handleSubmit(handleSearchTransactions)} */>
        <input 
          type="text" 
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </InputContainer>
      <PostCardContainer>
        <PostCardContainerUp>

        </PostCardContainerUp>
        <PostCardContainerDown>
          
        </PostCardContainerDown>
      </PostCardContainer>
    </PostContainer>
  )
}