import React from 'react'
import { Box } from '@mui/material'
import { useStyles } from './Container.css'

interface ContainerProps {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | null
    | string
    | undefined
}

export default function Container({ children }: ContainerProps) {
  const classes = useStyles({})
  return <Box className={classes.container}>{children}</Box>
}
