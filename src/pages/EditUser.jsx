import { Box, Typography} from "@mui/material";
import EditUserForm from "../components/EditUserForm.jsx";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  EditUser: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
    textAlign: "center",
    
  }
})

const CreateUser = () => {
  const classes = useStyles();
  return (
    <Box className={classes.EditUser}>
      <Typography variant="h3">Editar Usuario</Typography>
      <Link to="/">Volver al inicio</Link>
      <EditUserForm/>
    </Box>
  );
}

export default CreateUser;