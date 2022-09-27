import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    footerMenu: (props: JSSProps) => {
      return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(2.5),
      }
    },

    footerMenuItem: (props: JSSProps) => {
      return {
        display: 'flex',
        gap: theme.spacing(6.25),
        [theme.breakpoints.down('sm')]: {
          gap: theme.spacing(2),
        },
      }
    },

    footerAvatar: (props: JSSProps) => {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(2.5),

        padding: theme.spacing(5.625, 0),

        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      }
    },
  }
})
