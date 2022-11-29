import { Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/sign-up" element={<SignIn />}></Route>
            </Route>
        </Routes>
    )
}

export default MainRoutes;