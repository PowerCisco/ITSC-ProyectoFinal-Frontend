import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modalEliminar: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%'
  },
  modal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 700,
    height: 700,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%'
  },
  iconos: {
    cursor: 'pointer'
  },
  inputMaterial: {
    marginTop:'3px',
    width: '100%',
    borderRadius: '2%'
  }
}));
  
export const ModalBodyPacientes = () => {
    const styles = useStyles();


  return{
    styles
  }
}
