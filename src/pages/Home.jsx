import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
  },
  homeButtonsContainer: {
    display: "flex",
  }
});

const Home = () => {
  const classes = useStyles();
  return (

      <Box className={classes.homeContainer}>
        <Typography variant="h1">Usuarios</Typography>
        <Box className={classes.homeButtonsContainer}>
          <Link to="/users">
            <Button variant="contained" color="primary">
              Usuarios
            </Button>
          </Link>
          <Link to="/createuser">
            <Button variant="contained" color="primary">
              Create User
            </Button>
          </Link>
        </Box>
      </Box>
  );
}

export default Home;