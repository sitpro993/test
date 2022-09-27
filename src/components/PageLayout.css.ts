import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    pageLayout: (props: JSSProps) => {
      return {
        paddingTop: theme.spacing(3.75),
        paddingBottom: theme.spacing(6),
        marginTop: theme.spacing(-9.375),
        [theme.breakpoints.between('sm', 'md')]: {
          marginTop: theme.spacing(-8.5),
        },
        [theme.breakpoints.down('sm')]: {
          marginTop: '0px',
        },

        borderRadius: '20px 20px 0 0',
      }
    },
  }
})
