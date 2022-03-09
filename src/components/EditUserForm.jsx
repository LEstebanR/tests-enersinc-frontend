import { Box,  TextField, Select, InputLabel, MenuItem, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const useStyles = makeStyles({
  formContainer : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    border: "1px solid #CCC",
    padding: "20px",
    width: "300px",
    boxShadow: "0px 0px 10px #CCC",
    borderRadius: "10px",
    paddingTop: "30px",
  },
  input: {
    width: "80%",
    margin: "0 auto",
  }
});

const docType = "";

const EditUserForm = () => {
  const [newUser, setNewUser] = useState({})
  const classes = useStyles();
  const handleName = (event) => { setNewUser(
    {...newUser, name: event.target.value}
  )}
  const handleLastName = (event) => { setNewUser(
    {...newUser, lastName: event.target.value}
  )}
  const handleDocType = (event) => { setNewUser(
    {...newUser, documentType: event.target.value}
  )}
  const handleDocNumber = (event) => { setNewUser(
    {...newUser, documentNumber: event.target.value}
  )}
  const handleHobbie = (event) => { setNewUser(
    {...newUser, hobbie: event.target.value}
  )}
  const createUser = () => {
    console.log(newUser);
    axios.post("https://test-enersinc.herokuapp.com/users", newUser)
    .then(res => {
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado',
        text: 'El usuario ha sido creado con exito',
      })
      console.log(res)
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Verifica los datos ingresados',
      })
      console.log(err)
    })
  }


  return (
    <Box className = {classes.formContainer}>
      <TextField className={classes.input} required label="Nombre" onChange={handleName} />
      <TextField className={classes.input} required label="Apellido" onChange={handleLastName} />
      <InputLabel className={classes.input} id="demo-simple-select-label">Tipo de documento</InputLabel>
        <Select className={classes.input} value={docType} label="Tipo de documento"onChange={handleDocType}>
          <MenuItem value={"TI"}>TI</MenuItem>
          <MenuItem value={"CC"}>CC</MenuItem>
          <MenuItem value={"NIT"}>NIT</MenuItem>
        </Select>
      <TextField className={classes.input} required label="Documento"onChange={handleDocNumber} />
      <TextField className={classes.input} required label="Pasatiempo" onChange={handleHobbie} />
        <Button className={classes.input} variant="contained" color="primary" onClick={createUser} >Aceptar</Button>  
    </Box>

  );
}

export default EditUserForm;