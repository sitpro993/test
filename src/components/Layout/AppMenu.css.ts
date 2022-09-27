import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    appMenu: (props: JSSProps) => {
      return {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(3.75),

        [theme.breakpoints.down('md')]: {
          display: 'none !important',
        },
      }
    },

    menuItem: (props: JSSProps) => {
      return {
        display: 'flex',
        alignItems: 'center',

        padding: '10px',

        '& a': {
          display: 'block',
          '&:hover .MuiTypography-root': {
            color: '#6F7CF3',
          },
        },

        '& .active': {
          '& .MuiTypography-root': {
            color: '#8853FB',
          },
        },
      }
    },
  }
})
