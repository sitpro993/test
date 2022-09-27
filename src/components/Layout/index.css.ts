import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    mainBanner: (props: JSSProps) => {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: '503px',
        [theme.breakpoints.between('sm', 'md')]: {
          height: '403px',
        },
        [theme.breakpoints.down('sm')]: {
          height: '303px',
          margin: theme.spacing(1, 1, 0, 1),
        },

        backgroundImage:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./images/banner.png);',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        borderRadius: '12px',

        margin: theme.spacing(3, 3, 0, 3),

        '& .MuiTypography-root': {
          padding: '0 10px',
        },
      }
    },
  }
})
