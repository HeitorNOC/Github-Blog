import { ThemeProvider } from "styled-components";
import { GithubBlogProvider } from "./context/githubContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubBlogProvider>
        <Home />
      </GithubBlogProvider>
    </ThemeProvider>
  )
}