import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './LogIn/login';
import SignUp from './SignUp/signup';

function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<LogIn />} />
        <Route path='/sign' element={<SignUp />} />

      </Routes>

    </>
  );
}

export default App;
