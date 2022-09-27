import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useStyles } from './Header.css'
import AppMenu from './AppMenu'
import { Link } from 'react-router-dom'
import Container from './Container'

export default function Header() {
  const [offset, setOffset] = useState<number>(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  })

  const classes = useStyles({ offset })
  return (
    <header className={classes.header}>
      <Container>
        <Box className={classes.headerWrapper}>
          <Link to="/">
            <img
              className={classes.logo}
              src="./images/light_logo.svg"
              alt="logo"
            />
          </Link>
          <AppMenu />
        </Box>
      </Container>
    </header>
  )
}
