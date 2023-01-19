import { makeStyles } from '@material-ui/core/styles'
import Image from '../../Assets/ecom.png'

export default makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
    
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        paddingTop: '40vh',
    },
    title: {
        color: theme.palette.grey[600],
    },
    button: {
        color: theme.palette.grey[600],
        textDecoration: 'underline',
        cursor: 'pointer',
        width: '100px',
        height: '50px',
      },
}))
  