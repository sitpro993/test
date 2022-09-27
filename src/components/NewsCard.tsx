import React from 'react'
import { Card, CardMedia, Typography, CardContent, Box } from '@mui/material'
export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        height="202"
        image="/images/test.png"
        alt="green iguana"
      />
      <CardContent>
        <Box>
          <Typography variant="caption" color="text.secondary">
            39/03/2022
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Hidden universe revealed in stunning first images from German
            telescope
          </Typography>

          <Typography
            variant="h6"
            color="#6C55F9"
            sx={{ cursor: 'pointer', '&:hover': { color: '#6F7CF3' } }}
          >
            Đọc thêm
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
