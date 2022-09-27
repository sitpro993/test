import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { mainMenu } from '../../assets/menu'
import Container from './Container'
import { useStyles } from './Footer.css'

export default function Footer() {
  const classes = useStyles({})

  const leftMenu = mainMenu.filter((element, index) => {
    return index < mainMenu.length / 2 && element
  })

  const rightMenu = mainMenu.filter((element, index) => {
    return index >= mainMenu.length / 2 && element
  })

  return (
    <footer style={{ backgroundColor: '#0D0D10' }}>
      <Container>
        <Box className={classes.footerMenu}>
          <Box className={classes.footerMenuItem}>
            {leftMenu.map((item) => (
              <Link
                key={item.content}
                to={item.url}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="subtitle3" color="#fff">
                  {item.content}
                </Typography>
              </Link>
            ))}
          </Box>
          <Link to="/">
            <img className="footer_logo" src="./images/Logo-icon.svg" alt="" />
          </Link>
          <Box className={classes.footerMenuItem}>
            {rightMenu.map((item) => (
              <Link
                key={item.content}
                to={item.url}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="subtitle3" color="#fff">
                  {item.content}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>

        <Box className={classes.footerAvatar}>
          <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }} />
          <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }} />
          <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }} />
          <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }} />
        </Box>

        <Typography
          variant="body1"
          textAlign="center"
          pb={3.75}
          color="#C9C9C9"
        >
          &copy; Sigma, Inc. 2022. We love our users!
        </Typography>
      </Container>
    </footer>
  )
}
