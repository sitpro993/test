import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {
  offset?: number
}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    header: ({ offset = 0 }: JSSProps) => {
      return {
        width: '100%',

        position: offset > 25 ? 'fixed' : 'absolute',
        top: 0,
        left: 0,

        paddingTop: offset > 25 ? '10px' : '30px',
        paddingBottom: '10px',

        boxShadow:
          offset > 25
            ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
            : 'none',

        backgroundColor: offset > 25 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',

        zIndex: 1000,

        [theme.breakpoints.down('sm')]: {
          paddingTop: offset >= 16 ? '8px' : '16px',
        },
      }
    },

    headerWrapper: () => {
      return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    },

    logo: () => {
      return {
        height: '40px',
        width: '120px',
        [theme.breakpoints.down('md')]: {
          height: '30px',
          width: '90px',
        },
      }
    },
  }
})
