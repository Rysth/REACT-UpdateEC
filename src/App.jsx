import 'react-medium-image-zoom/dist/styles.css'
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Footer from './components/navigation/Footer/Footer'
import NavigationBar from './components/navigation/NavigationBar/NavigationBar'
import NotFound from './pages/404/NotFound'
import CartPage from './pages/CartPage/CartPage'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import SessionPage from './pages/SessionPage/SessionPage'
import FormSignIn from './pages/SessionPage/sections/FormSignIn'
import FormSignUp from './pages/SessionPage/sections/FormSignUp'
import ShopPage from './pages/ShopPage/ShopPage'

function App() {
  const { active } = useSelector((store) => store.session)

  return (
    <BrowserRouter>
      <ToastContainer position="top-left" />
      <NavigationBar />
      <main className="h-full">
        <Routes>
          <Route
            path="/sign_in"
            element={
              <ProtectedRoute isAllowed={!active} redirectTo="/">
                <SessionPage>
                  <FormSignIn />
                </SessionPage>
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign_up"
            element={
              <ProtectedRoute isAllowed={!active} redirectTo="/">
                <SessionPage>
                  <FormSignUp />
                </SessionPage>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productID" element={<ProductPage />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isAllowed={active} redirectTo="/sign_in">
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFound />} /> */
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
