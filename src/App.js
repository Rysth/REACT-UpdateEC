import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import { NotificationContainer } from 'react-notifications';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Session/Login';
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
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
