import { Box, Typography, Button} from "@mui/material";
import EditUserForm from "../components/EditUserForm.jsx";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  EditUser: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    marginTop: "50px",
    textAlign: "center",
    height: "100vh",
    
  }
})

const CreateUser = () => {
  const classes = useStyles();
  return (
    <Box className={classes.EditUser}>
      <Typography variant="h3">Editar Usuario</Typography>
      <Link to="/"><Button variant="outlined">Volver al inicio</Button></Link>
      <EditUserForm/>
    </Box>
  );
}

export default CreateUser;