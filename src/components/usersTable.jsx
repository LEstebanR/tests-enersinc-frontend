import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../assets/styles/usersTable.css';
import axios from "axios";
import Swal from "sweetalert2";

const UsersTable = ({users}) => {
  
  const deleteUser = (e) => {
    axios.delete('https://test-enersinc.herokuapp.com/user', { data: {userId: e.currentTarget.value}})
    .then(res => {
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El usuario ha sido borrado!',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        window.location.reload()
      } , 1500)
    })
    .catch(err => {
      console.log(err);
    }
    )
  }

  const goToEditPage = (e) => {
    window.location.href = `/edituser/${e.currentTarget.value}`
  }


  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Documento</th>
          <th>Pasatiempo</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.documentType}. {user.documentNumber}</td>
            <td>{user.hobbie}</td>
            <td> 
              <IconButton onClick={goToEditPage} value={user._id}><EditIcon /></IconButton>
              <IconButton onClick={deleteUser} value={user._id}><DeleteIcon /></IconButton>
            </td>
          </tr>
        ))}
      </tbody>




    </table>

  )
}

export default UsersTable;