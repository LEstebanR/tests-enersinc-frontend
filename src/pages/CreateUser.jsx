import { Box, Typography} from "@mui/material";
import CreateUserForm from "../components/createUserForm";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  CreateUser: {
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
    <Box className={classes.CreateUser}>
      <Typography variant="h3">Crear usuario</Typography>
      <Link to="/">Volver al inicio</Link>
      <CreateUserForm/>
    </Box>
  );
}

export default CreateUser;