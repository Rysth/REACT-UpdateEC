import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import { NotificationContainer } from 'react-notifications';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SignIn from './pages/Session/SignIn';
import SignUp from './pages/Session/SignUp';
import store from './redux/store';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <NotificationContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
