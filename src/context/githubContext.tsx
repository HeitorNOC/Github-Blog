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

interface GithubBlogContextType {
  profile: GithubProfile | undefined
  fetchProfile: (query?: string) => Promise<void>
}

interface GithubBlogProviderProps {
  children: ReactNode
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [profile, setProfile] = useState<GithubProfile>()
  const [user] = useState('HeitorNOC')

  async function fetchProfile(query?: string) {
    const response = await api.get(`/users/${user}`, {
      params: {
        q: query
      }
    })

    setProfile(response.data)
    
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <GithubBlogContext.Provider value={{
      profile,
      fetchProfile
    }}>
      {children}
    </GithubBlogContext.Provider>
  )
}