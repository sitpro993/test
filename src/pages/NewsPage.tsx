import React from 'react'
import { Box } from '@mui/material'
import Container from '../components/Layout/Container'
import PageLayout from '../components/PageLayout'
import NewsCard from '../components/NewsCard'
import { useStyles } from './NewsPage.css'

export default function NewsPage() {
  const classes = useStyles({})
  return (
    <PageLayout
      title="Latest Updates"
      subtitle="See what the press has to say about us"
    >
      <Container>
        <Box className={classes.newsPage}>
          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />
        </Box>
      </Container>
    </PageLayout>
  )
}
