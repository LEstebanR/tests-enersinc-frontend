import { Box,  TextField, Select, InputLabel, MenuItem, Button, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://test-enersinc.herokuapp.com/user/${id}`)
      .then(res => {
      setNewUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


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

  const updateUser = () => {
    axios.put(`https://test-enersinc.herokuapp.com/user/${id}`, newUser)
    .then(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El usuario ha sido actualizado!',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        window.location.href = "/users"

      } , 1500)
      console.log(res)
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Error, verifica la información',
      })
      console.log(err)
    })
  }

  return (
  
    <Box className = {classes.formContainer}>
      <InputLabel className={classes.input} id="demo-simple-select-label">Nombre</InputLabel>
      <TextField  hiddenlabel="true" placeholder={newUser.name} variant="outlined" onChange={handleName}/>
      <InputLabel className={classes.input} id="demo-simple-select-label">Apellido</InputLabel>
      <TextField className={classes.input} required hiddenlabel="true" placeholder={newUser.lastName} onChange={handleLastName} />
      <InputLabel className={classes.input} id="demo-simple-select-label">Tipo de documento</InputLabel>
        <Select className={classes.input} onChange={handleDocType} labelId="demo-simple-select-label" value="CC" id="demo-simple-select">
          <MenuItem value="TI">TI</MenuItem>
          <MenuItem value="CC">CC</MenuItem>
          <MenuItem value="NIT">NIT</MenuItem>
        </Select>
      <InputLabel className={classes.input} id="demo-simple-select-label">Número de documento</InputLabel>
      <TextField className={classes.input} datatype="Number"  required hiddenlabel="true" placeholder={String(newUser.documentNumber)} onChange={handleDocNumber} />
      <InputLabel className={classes.input} id="demo-simple-select-label">Pasatiempo</InputLabel>
      <TextField className={classes.input} required hiddenlabel="true" placeholder={newUser.hobbie} onChange={handleHobbie} />
        <Button className={classes.input} variant="contained" color="primary"  onClick={updateUser}>Aceptar</Button>  
    </Box>

  );

}

export default EditUserForm;