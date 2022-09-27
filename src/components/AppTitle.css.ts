import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    divider: (props: JSSProps) => {
      return {
        width: '24px',
        height: '3px',

        backgroundColor: '#6C55F9',

        borderRadius: '2px',

        marginBottom: '32px',
        marginLeft: '4px',
      }
    },
  }
})
