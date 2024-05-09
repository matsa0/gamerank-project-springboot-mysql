import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Adminpage from './admin/game/AdminpageGames';
import { NavbarAdmin } from './admin/NavbarAdmin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameForm from './admin/game/GameForm';
import UpdateForm from './admin/game/UpdateForm'
import ViewGame from './admin/game/ViewGame';
import AdminpageUsers from './admin/user/AdminpageUsers';
import UserForm from './admin/user/UserForm';
import ViewUser from './admin/user/ViewUser';
import Login from './pages/Login';
import Register from './pages/Register';
import FirstPage from './pages/FirstPage';
import Navbar from './layout/Navbar';
import Categories from './pages/Categories';

function App() {
  return (
    <div className='App'>
      <Router>

        <Routes>
          {/* ADMINPAGE - GAME */}
          <Route exact path= "/admin_games" element = {
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
          
          <Route exact path = "/view_game/:id" element = {
            <>
              <NavbarAdmin />
              <ViewGame />
            </>
          }
          />


          {/* ADMINPAGE - USERS */}
          <Route exact path = "/admin_users" element = {
            <>
              <NavbarAdmin />
              <AdminpageUsers />
            </>
          }/>

          <Route exact path = "/add_user" element = {
          <>
            <NavbarAdmin />
            <UserForm />
          </>} 
          />

          <Route exact path = "/view_user/:id" element = {
            <>
              <NavbarAdmin />
              <ViewUser />
            </>
          }/>

          
          {/* LOGIN & REGISTER */}
          <Route exact path = "/login" element = {
            <>
              <Login />
            </>
          }/>

          <Route exact path = "/register" element = {
            <>
              <Register />
            </>
          }
          />


          {/* / & HOME*/}
          <Route exact path = "/" element = {
            <>
              <FirstPage />
            </>
          }/>

          <Route exact path = "/categories" element = {
            <>
              <Navbar />
              <Categories />
            </>
          }/>
          
          <Route exact path = "/categories/:genre" element = {
            <>
              <Navbar/>
            </>
          }/>


        </Routes>
      </Router>

    </div>
  );
}

export default App;
