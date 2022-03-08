import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import CreateUser from './pages/CreateUser.jsx';
import EditUser from './pages/EditUser.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/createuser" element={<CreateUser/>} />
      <Route path="/edituser/:id" element={<EditUser/>} />
    </Routes>
  );
}

export default App;
