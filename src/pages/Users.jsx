import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import UsersTable from "../components/usersTable";
import {Link} from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  usersContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "50px",
    minHeight: "100vh",
  }
})

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://test-enersinc.herokuapp.com/users").then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <Box className={classes.usersContainer}>
      <Typography variant="h3">Usuarios</Typography>
      <Link to="/"><Button variant="outlined">Volver al inicio</Button></Link>
      <UsersTable users={users} />
    </Box>
  );
}

export default Users;