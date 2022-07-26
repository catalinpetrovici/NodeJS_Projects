import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ProtectedRoute,
  ForgotPassword,
  ResetPassword,
} from './pages';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />

        <Route path='/login' exact element={<Login />} />

        <Route path='/register' exact element={<Register />} />

        <Route
          path='/dashboard'
          exact
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path='/forgot-password' exact element={<ForgotPassword />} />

        <Route path='/user/verify-email' exact element={<Verify />} />

        <Route path='/user/reset-password' exact element={<ResetPassword />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
