import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import { NotificationContainer } from 'react-notifications';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SignIn from './pages/Session/SignIn';
import SignUp from './pages/Session/SignUp';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';

function App() {
  const { active } = useSelector((store) => store.session);

  /* eslint-disable */
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NotificationContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/sign_in"
            element={
              <ProtectedRoute isAllowed={!active} redirectTo="/">
                <SignIn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign_up"
            element={
              <ProtectedRoute isAllowed={!active} redirectTo="/">
                <SignUp />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
