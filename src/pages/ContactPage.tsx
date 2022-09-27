import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useStyles } from './ContactPage.css'
import AppTitle from '../components/AppTitle'
import Container from '../components/Layout/Container'

export default function ContactPage() {
  const classes = useStyles({})
  return (
    <Container>
      <Box className={classes.contactPage}>
        <Box className={classes.contactTitle}>
          <AppTitle
            title="Contact"
            subtitle="I think it takes more than three seconds to build your brand, and consumers are willing to spend the time if your content is compelling, relevant, and valuable"
            fontWeightSubtitle={300}
            hasDivider={true}
          />
        </Box>
        <Box
          className={classes.contactForm}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Typography variant="subtitle3" pr={5} color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Typography>
          <TextField
            id="conatact-company-name"
            label="Company Name"
            placeholder="Company Name"
            style={{ width: '100%' }}
          />
          <TextField
            id="contact-email"
            label="Email"
            placeholder="Email"
            style={{ width: '100%' }}
          />
          <Box>
            <TextField
              id="contact-first-name"
              label="First Name"
              placeholder="First Name"
            />
            <TextField
              id="contact-last-name"
              label="Last Name"
              placeholder="Last Name"
            />
          </Box>
          <Button variant="contained">Send</Button>
        </Box>
      </Box>
    </Container>
  )
}
