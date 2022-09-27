import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {
  direction: 'row' | 'row-reverse'
}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: (props: JSSProps) => {
      return {
        display: 'flex',
        flexDirection: props.direction,
        justifyContent:
          props.direction === 'row-reverse' ? 'left' : 'space-between',
        gap: theme.spacing(5),

        marginBottom: theme.spacing(10.5),

        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
          gap: theme.spacing(5),

          marginBottom: theme.spacing(5),
        },
      }
    },

    textItem: (props: JSSProps) => {
      return {
        marginTop: theme.spacing(1.75),
        paddingLeft: theme.spacing(5),
        [theme.breakpoints.down('lg')]: {
          marginTop: 0,
          paddingLeft: 0,
        },
      }
    },
    imgItem: (props: JSSProps) => {
      return {
        '& img': {
          width: '100%',
          height: 'auto',

          borderRadius: '12px',
        },
      }
    },
  }
})
