import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../assets/styles/usersTable.css';

const UsersTable = ({users}) => {
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
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.documentType}. {user.documentNumber}</td>
            <td>{user.hobbie}</td>
            <td> 
              <EditIcon />
              <DeleteIcon />

            </td>
          </tr>
        ))}
      </tbody>




    </table>

  )
}

export default UsersTable;