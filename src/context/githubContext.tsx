import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface GithubProfile {
  avatar_url: string
  name: string
  followers: number
  login: string
  company: string
  bio: string
  
}
 interface Issue {
  title: string
  updated_at: string 
  body: string
}

interface GithubBlogContextType {
  profile: GithubProfile | undefined
  totalCountIssues: number | undefined
  issue: Issue[] | undefined
  handleSetTexto: (text:string) => void
  searchIssue: (query?: string) => Promise<void>
  
}

interface GithubBlogProviderProps {
  children: ReactNode
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [profile, setProfile] = useState<GithubProfile>()
  const [issue, setIssue] = useState<Issue[]>()
  const [user] = useState('HeitorNOC')
  const [repo] = useState('Github-Blog')
  const [texto, setTexto] = useState('')
  const [totalCountIssues, setTotalCountIssues] = useState(0)

  async function fetchProfile(query?: string) {
    const response = await api.get(`/users/${user}`, {
      params: {
        q: query
      }
    })

    setProfile(response.data)
    
  }

  async function searchIssue(query?: string) {
    const response = await api.get(`/search/issues?q=${texto}%20repo:${user}/${repo}`, )

    setIssue(response.data.items)
    setTotalCountIssues(response.data.total_count)
  }

  function handleSetTexto(text: string) {
    setTexto(text)
  }

  useEffect(() => {
    fetchProfile()
    searchIssue(`${texto}%20repo:${user}/${repo}`)
  }, [])

  return (
    <GithubBlogContext.Provider value={{
      profile,
      totalCountIssues,
      searchIssue,
      issue,
      handleSetTexto
    }}>
      {children}
    </GithubBlogContext.Provider>
  )
}