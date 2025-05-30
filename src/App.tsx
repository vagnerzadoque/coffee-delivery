import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'
import { defaultTheme } from './GlobalThemes/themes/default'
import { GlobalStyle } from './GlobalThemes/global'

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Outlet />
      </ThemeProvider>
  )
}

export default App
