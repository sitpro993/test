import React from 'react'
import { Box } from '@mui/material'
import PageLayout from '../components/PageLayout'
import Container from '../components/Layout/Container'
import { useStyles } from './PartnersPage.css'

export default function PartnersPage() {
  const classes = useStyles({})
  return (
    <PageLayout
      title="Technologies and work with leading ecosystem partners"
      subtitle="See what the press has to say about us"
      bgcolor="background.paper"
    >
      <Container>
        <Box className={classes.partnersPage}>
          <Box bgcolor="#212121" height={238}></Box>

          <Box bgcolor="#212121" height={238}></Box>

          <Box bgcolor="#212121" height={238}></Box>

          <Box bgcolor="#212121" height={238}></Box>

          <Box bgcolor="#212121" height={238}></Box>

          <Box bgcolor="#212121" height={238}></Box>
        </Box>
      </Container>
    </PageLayout>
  )
}
