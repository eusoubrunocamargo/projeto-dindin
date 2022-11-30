import { Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main"
import Dashboard from "./pages/Dashboard";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/sign-up" element={<SignIn />}></Route>
            </Route>

            <Route path="/login" element={<Main />}></Route>

            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    )
}

export default MainRoutes;