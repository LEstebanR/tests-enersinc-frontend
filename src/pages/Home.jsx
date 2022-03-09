import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Player} from '@lottiefiles/react-lottie-player';
import styled from "@emotion/styled";

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
    
  },

  homeButton: {
    width: "200px"
  }

});

const Home = () => {
  const classes = useStyles();
  return (

      <Box className={classes.homeContainer}>
        <Player autoplay loop
          src="https://assets10.lottiefiles.com/packages/lf20_VWOntT.json"
          style={ {width: "auto", height: "400px"} }
          >
        </Player>   
        <Box className={classes.homeButtonsContainer}>
          <Link to="/users">
            <Button className={classes.homeButton} variant="outlined" color="primary" size="large">
              Usuarios
            </Button>
          </Link>
          <Link to="/createuser">
            <Button className={classes.homeButton} variant="outlined" color="primary" size="large">
              Crear usuario
            </Button>
          </Link>
        </Box>
      </Box>
  );
}

export default Home;