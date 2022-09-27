import React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme, CssBaseline, responsiveFontSizes } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { darkTheme, lightTheme, customTheme } from './theme'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SolutionPage from './pages/SolutionPage'
import NewsPage from './pages/NewsPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'

function App() {
  const { themeMode } = useSelector((state: RootState) => state.theme)

  const theme = responsiveFontSizes(
    createTheme(
      themeMode === 'light'
        ? { ...lightTheme, ...customTheme }
        : { ...darkTheme, ...customTheme },
    ),
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
