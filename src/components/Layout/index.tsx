import React from 'react'
import { Box, Typography } from '@mui/material'
import { useStyles } from './index.css'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactElement | null | string | undefined
}

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles({})

  return (
    <>
      <Header />
      <main>
        <Box className={classes.mainBanner}>
          <Typography variant="h1" textAlign="center" color="#fff">
            Deliver a great experience for your <br />
            customers
          </Typography>
        </Box>
        <div>{children}</div>
      </main>

      <Footer />
    </>
  )
}
