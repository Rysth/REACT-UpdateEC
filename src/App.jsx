import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { MdSpaceDashboard } from 'react-icons/md'
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
import AboutPage from './pages/AboutPage/AboutPage'
import AdminPage from './pages/AdminPage/AdminPage'
import CartPage from './pages/CartPage/CartPage'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import ProductPage from './pages/ProductPage/ProductPage'
import SessionPage from './pages/SessionPage/SessionPage'
import FormSignIn from './pages/SessionPage/sections/FormSignIn'
import FormSignUp from './pages/SessionPage/sections/FormSignUp'
import ShopPage from './pages/ShopPage/ShopPage'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const { active, isAdmin } = useSelector((store) => store.session)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <NavigationBar />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed shadow w-14 h-14 bottom-5 right-5 z-[9000] btn-circle btn-primary btn text-white"
          color="blue"
        >
          <HiArrowUp className="text-lg" />
        </button>
      )}
      {isAdmin && (
        <a
          href="/admin/estadisticas"
          className="fixed shadow w-14 h-14 bottom-5 left-5 z-[9000] btn-circle btn-neutral btn text-white"
          color="blue"
        >
          <MdSpaceDashboard className="text-lg" />
        </a>
      )}
      <main className="min-h-screen">
        <Routes>
          <Route
            path="/admin/estadisticas"
            element={
              <ProtectedRoute isAllowed={active && isAdmin} redirectTo="/sign_in">
                <AdminPage />
              </ProtectedRoute>
            }
          />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop/:searchParam?" element={<ShopPage />} />
          <Route path="/shop/:categoryName/:productID" element={<ProductPage />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isAllowed={active} redirectTo="/sign_in">
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute isAllowed={active} redirectTo="/sign_in">
                <OrderPage />
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
