import { BrowserRouter, Route, Routes } from "react-router"
import { Suspense, lazy } from "react"
import RootLayout from "./layouts/RootLayout"
import Loading from "./components/Loading"

const Home = lazy(() => import("./pages/Home"))
const NotFound = lazy(() => import("./pages/NotFound"))


function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<RootLayout/>}>
                  <Route index element={<Home/>} />
                  <Route path="*" element={<NotFound />}></Route>
          </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
