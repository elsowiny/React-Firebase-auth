import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'red'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },

    textField: {
      width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color: 'blue',
    },

    input: {
      fontSize: 16,
      color: 'white',
      background: 'none',
    },
    label: 
    {
      color: 'white',
      fontSize: 14,
      "&$focusedLabel": {
        color: "cyan"
      },
      "&$erroredLabel": {
        color: "orange"
      }
    },
    focusedLabel: {},
    erroredLabel: {},
    underline: {
      "&$error:after": {
        borderBottomColor: "orange"
      },
      "&:after": {
        borderBottom: `2px solid cyan`
      }
    },
    error: {}
    
  }));

export default useStyles;