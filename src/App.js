import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import OwnershipTrans from './components/OwnershipTrans';
import Renewal from './components/Renewal';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/ownershiptrans" element={<OwnershipTrans />} />
      <Route path="/renewal" element={<Renewal />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
