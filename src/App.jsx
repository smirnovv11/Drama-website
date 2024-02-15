import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import { lazy } from "react"

const MainPage = lazy(() => import('./pages/mainPage/MainPage'))

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
