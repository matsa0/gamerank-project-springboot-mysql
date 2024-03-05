import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Adminpage from './admin/Adminpage';
import { NavbarAdmin } from './admin/NavbarAdmin';

function App() {
  return (
    <div className='App'>
      <NavbarAdmin /> 
      <Adminpage />
    </div>
  );
}

export default App;
