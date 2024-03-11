import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Adminpage from './admin/Adminpage';
import { NavbarAdmin } from './admin/NavbarAdmin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameForm from './admin/GameForm';
import UserForm from './admin/UserForm';
import UpdateForm from './admin/UpdateForm'
import ViewGame from './admin/ViewGame';

function App() {
  return (
    <div className='App'>
      <Router>


        <Routes>
          <Route exact path= "/" element = {
          <>
            <NavbarAdmin />
            <Adminpage />
          </>} 
          />

          <Route exact path = "/add_game" element = {
          <>
            <NavbarAdmin />
            <GameForm />
          </>} 
          />

          <Route exact path = "/update_game/:id" element = {
          <>
            <NavbarAdmin />
            <UpdateForm />
          </>} 
          />

          <Route exact path = "/add_user" element = {
          <>
            <NavbarAdmin />
            <UserForm />
          </>} 
          />
          
          <Route exatct path = "/view_game/:id" element = {
            <>
              <NavbarAdmin />
              <ViewGame />
            </>
          }
          
          />



        </Routes>


      </Router>
    </div>
  );
}

export default App;
