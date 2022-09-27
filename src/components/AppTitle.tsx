import React from 'react'
import { Typography, useTheme } from '@mui/material'
import { useStyles } from './AppTitle.css'

interface AppTitleProps {
  title: string
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

  subtitle: React.ReactNode
  subtitleVariant?:
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
  fontWeightSubtitle?: number
  lineHeightSubtitle?: number | undefined
  hasDivider?: boolean
  textAlign?: 'left' | 'right' | 'center'
}

export default function AppTitle({
  title,
  titleVariant = 'h3',
  subtitle,
  subtitleVariant = 'h5',
  fontWeightSubtitle = 400,
  lineHeightSubtitle = 1.48,
  hasDivider = false,
  textAlign = 'left',
}: AppTitleProps) {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <>
      <Typography variant={titleVariant} mb={2} textAlign={textAlign}>
        {title}
      </Typography>
      {hasDivider && <div className={classes.divider}></div>}
      <Typography
        variant={subtitleVariant}
        fontWeight={fontWeightSubtitle}
        lineHeight={lineHeightSubtitle}
        sx={{ color: theme.palette.text.secondary }}
        textAlign={textAlign}
      >
        {subtitle} {/* nhận vào đây là 1 ReactNode hoặc một HTMLElemnet*/}
      </Typography>
    </>
  )
}
