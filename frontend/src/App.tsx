import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	)
}

export default App
