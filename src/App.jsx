import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NavigationBar from './components/NavigatioBar/NavigationBar'
import SessionPage from './pages/SessionPage/SessionPage'
import FormSignIn from './pages/SessionPage/components/FormSignIn'
import FormSignUp from './pages/SessionPage/components/FormSignUp'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import { fetchProducts } from './redux/slices/productSlice'
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
          {/* <Route path="/" element={<Home />} />
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
          <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
