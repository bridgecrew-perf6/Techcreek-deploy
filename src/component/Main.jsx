import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Home";
import LearnPage from "./pages/LearnPage"
import CreatePage from "./pages/CreatePage"
import ConnectPage from "./pages/ConnectPage"
import Membership from "./pages/MembershipPage"
import Navbar from "./Navbar";


const Main = () => {
    return ( 
        <div className="main__container">
            <div className="main__box">
            
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="Learn" element={<LearnPage/>}/>
                <Route path="Create" element={<CreatePage/>}/>
                <Route path="Connect" element={<ConnectPage/>}/>
                <Route path="Membership" element={<Membership/>} />
            </Routes>
        </Router>
            
            </div>
        </div>
     );
}
 
export default Main;