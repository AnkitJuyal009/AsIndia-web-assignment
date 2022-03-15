import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from './context/UserAuthContext';
import './App.css';

function App() {
  return (
    <UserAuthContextProvider>
        <Navbar />
        <div className='App'>
          <Routes>
            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
    </UserAuthContextProvider>
  );
}

export default App;
