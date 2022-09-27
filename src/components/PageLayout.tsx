import React from 'react'
import { Box } from '@mui/material'
import { useStyles } from './PageLayout.css'
import AppTitle from './AppTitle'
import Container from './Layout/Container'
interface PageLayoutProps {
  children?: React.ReactNode | string | null | undefined
  homePage?: boolean | 'true' | 'false'
  title: string
  subtitle: string
  titleVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | 'subtitle3'
    | undefined
  bgcolor?: string
}

export default function PageLayout({
  children,
  title,
  subtitle,
  titleVariant = 'h3',
  bgcolor = 'background.default',
}: PageLayoutProps) {
  const classes = useStyles({})
  return (
    <>
      <Container>
        <Box className={classes.pageLayout} bgcolor={bgcolor}>
          <AppTitle
            title={title}
            titleVariant={titleVariant}
            textAlign="center"
            subtitle={subtitle}
          />
        </Box>
      </Container>

      <Box>{children}</Box>
    </>
  )
}
