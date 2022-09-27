import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    newsPage: (props: JSSProps) => {
      return {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'center',
        gap: theme.spacing(6, 6),

        [theme.breakpoints.up('xl')]: {
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },

        [theme.breakpoints.between('sm', 'md')]: {
          gridTemplateColumns: '1fr 1fr',
        },

        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
          justifyItems: 'center',
        },

        marginBottom: theme.spacing(5.625),
      }
    },
  }
})
