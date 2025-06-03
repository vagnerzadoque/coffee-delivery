import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'
import { defaultTheme } from './GlobalThemes/themes/default'
import { GlobalStyle } from './GlobalThemes/global'
import { Header } from './Component/Header'

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Outlet />
      </ThemeProvider>
  )
}

export default App
