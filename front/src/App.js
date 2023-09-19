import './App.css';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './Components/HomePage';
// import AddEmployee from './Components/AddEmployee';
// import MainPage from './Components/MainPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          {/* <Route path='/mainpage/' element={<MainPage />} >
          <Route path='home' element={<HomePage />} />
          <Route path='newemployee' element={<AddEmployee />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
