import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    partnersPage: (props: JSSProps) => {
      return {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: theme.spacing(3.75),
        justifyContent: 'space-between',

        borderRadius: '0 0 20px 20px',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

        backgroundColor: theme.palette.background.paper,

        marginBottom: theme.spacing(8),
        padding: theme.spacing(0, 5.625, 5.625, 5.625),
      }
    },
  }
})
