import { useEffect } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import NavigationBar from './components/NavigatioBar/NavigationBar'
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
      <ToastContainer position="bottom-right" />
      <NavigationBar />
      <main>
        <Routes>
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
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
