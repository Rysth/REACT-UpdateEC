import { useEffect } from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NavigationBar from './components/navigation/NavigationBar/NavigationBar'
import NotFound from './pages/404/NotFound'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import SessionPage from './pages/SessionPage/SessionPage'
import FormSignIn from './pages/SessionPage/components/FormSignIn'
import FormSignUp from './pages/SessionPage/components/FormSignUp'
import ShopPage from './pages/ShopPage/ShopPage'
import Footer from './components/Footer/Footer'
import { fetchLastestProducts } from './redux/slices/productSlice'

function App() {
  const { active } = useSelector((store) => store.session)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLastestProducts())
  }, [dispatch])

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
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
          <Route path="/*" element={<NotFound />} /> */
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
