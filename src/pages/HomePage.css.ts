import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    characteristic: (props: JSSProps) => {
      return {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: '1fr',
          gap: theme.spacing(3, 0),
        },
      }
    },

    characteristicItem: (props: JSSProps) => {
      return {
        maxWidth: '270px',

        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        alignSelf: 'center',

        '& img': {
          padding: theme.spacing(0, 6),
        },
      }
    },

    lastestNews: (props: JSSProps) => {
      return {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: theme.spacing(5.625, 5.625),

        [theme.breakpoints.between('sm', 'md')]: {
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
        },
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
          justifyItems: 'center',
        },
      }
    },
  }
})
