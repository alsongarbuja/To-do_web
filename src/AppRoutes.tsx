import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleTodo from "./pages/SingleTodo"


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes