import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Projects from "./pages/Projects.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Header from "./components/Header.tsx";

function App() {

    return (

        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path={'/about'} element={<About/>}/>
                <Route path={'/sign-in'} element={<SignIn/>}/>
                <Route path={'/sign-up'} element={<SignUp/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}/>


            </Routes>
        </BrowserRouter>
    )
}

export default App
