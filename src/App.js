import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import OwnershipTrans from './components/OwnershipTrans';
import Renewal from './components/Renewal';
import Duplicate from './components/Duplicate';
import Address from './components/Address';
import Phnumber from './components/Phnumber';
import AdminLogin from './components/AdminLogin';
import AdminView from './components/AdminView';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminview' element={<AdminView/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/ownershiptrans" element={<OwnershipTrans />} />
      <Route path="/renewal" element={<Renewal />} />
      <Route path="/duplicate" element={<Duplicate />} />
      <Route path="/address" element={<Address />} />
      <Route path="/phnumber" element={<Phnumber />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
