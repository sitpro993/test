import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    container: (props: JSSProps) => {
      return {
        [theme.breakpoints.up('xl')]: {
          margin: '0 140px',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
          margin: '0 100px',
        },

        [theme.breakpoints.between('md', 'lg')]: {
          margin: '0 50px',
        },

        [theme.breakpoints.between('sm', 'md')]: {
          margin: '0 50px',
        },

        [theme.breakpoints.down('sm')]: {
          margin: '0 25px',
        },
      }
    },
  }
})
