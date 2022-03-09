import { Box, Typography, Button} from "@mui/material";
import CreateUserForm from "../components/createUserForm";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  CreateUser: {
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
    <Box className={classes.CreateUser}>
      <Typography variant="h3">Crear usuario</Typography>
      <Link to="/"><Button variant="outlined">Volver al inicio</Button></Link>
      <CreateUserForm/>
    </Box>
  );
}

export default CreateUser;