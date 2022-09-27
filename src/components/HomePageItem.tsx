import React from 'react'
import { Box } from '@mui/material'
import AppTitle from '../components/AppTitle'
import { useStyles } from './HomePageItem.css'

interface HomePageItemProps {
  direction?: 'row' | 'row-reverse'
  title: string
  subtitle: React.ReactNode
  img: string
}
export default function HomePageItem({
  direction = 'row' as const,
  title,
  subtitle,
  img,
}: HomePageItemProps) {
  const classes = useStyles({ direction })
  return (
    <Box className={classes.root}>
      <Box className={classes.textItem}>
        <AppTitle
          title={title}
          subtitle={subtitle}
          fontWeightSubtitle={300}
          hasDivider={true}
          lineHeightSubtitle={2.5}
        />
      </Box>
      <Box className={classes.imgItem}>
        <img src={img} alt="" style={{}} />
      </Box>
    </Box>
  )
}
