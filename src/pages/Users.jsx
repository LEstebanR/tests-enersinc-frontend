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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "50px",
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
      <Link to="/">Volver al inicio</Link>
      <UsersTable users={users} />
    </Box>
  );
}

export default Users;