import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SignIn from './pages/Session/SignIn'
import SignUp from './pages/Session/SignUp'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop/Shop'
import Product from './pages/Product/Product'
import { fetchProducts } from './redux/slices/productSlice'
import NotFound from './pages/404/NotFound'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { active } = useSelector((store) => store.session)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productID" element={<Product />} />
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
