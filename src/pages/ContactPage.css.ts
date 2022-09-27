import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
interface JSSProps {}

export const useStyles = makeStyles((theme: Theme) => {
  return {
    contactPage: (props: JSSProps) => {
      return {
        display: 'flex',
        gap: theme.spacing(12.5),

        marginTop: theme.spacing(-9.375),
        marginBottom: theme.spacing(9.375),
        padding: theme.spacing(12.5, 10),

        boxShadow: theme.shadows?.[1],
        borderRadius: '20px',

        backgroundColor: theme.palette?.background?.paper,

        [theme.breakpoints.between('md', 'xl')]: {
          gap: theme.spacing(5),

          marginTop: theme.spacing(-7.375),
          marginBottom: theme.spacing(7.375),
          padding: theme.spacing(5, 5),
        },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          gap: theme.spacing(3),

          padding: theme.spacing(5, 5),
          marginTop: theme.spacing(-7.375),
          marginBottom: theme.spacing(7.375),
        },
      }
    },
    contactTitle: (props: JSSProps) => {
      return {
        width: '60%',

        marginTop: theme.spacing(5.5),

        [theme.breakpoints.down('md')]: {
          width: '100%',

          marginTop: theme.spacing(0),
        },
      }
    },

    contactForm: (props: JSSProps) => {
      return {
        width: '40%',

        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1.75),

        paddingLeft: theme.spacing(3),

        '& .MuiBox-root': {
          display: 'flex',
          gap: theme.spacing(1.75),
          '& .MuiFormControl-root': {
            width: '50%',
          },

          [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            '& .MuiFormControl-root': {
              width: '100%',
            },
          },
        },
        [theme.breakpoints.down('md')]: {
          width: '100%',

          paddingLeft: theme.spacing(0),
        },
      }
    },
  }
})
