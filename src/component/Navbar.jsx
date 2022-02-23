import { Link } from "react-router-dom";
import BlueLogo from "./Assests/logo-white.png";
import Notification from "./Assests/ic_notification.svg";
import { useState } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
// import "boostrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Pulse from "react-reveal/Pulse";
import "../component/styles/navbar.scss";
import ModalPage from "./Modal/ModalPage";
import Arrow from "./Assests/ic-arrow-right.png"

const Navbar = () => {
    const navItems = [
        { title: "Home", path: "/" },
        { title: "Learn", path: "/Learn" },
        { title: "Create", path: "/Create" },
        { title: "Connect", path: "/Connect" },    
      ];

      
  const [showTraining, setShowTraining] = useState(true);
  const handleClick = () => setShowTraining(!showTraining);

  //form modal
  const [modal, setModal] = useState(false);
  //modal function
  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
  };


  const [modall, setModall] = useState(false)

    const toggleModal = () => {
        setModall(!modall);
      };


    return ( 
        <div className="nav-bar">
            <nav>
                <div className="logo">
                    <a href="" className="logo__link"><img src={BlueLogo} alt="" /></a>
                </div>

                <ModalPage 
                  modall={modall}
                  toggleModal={toggleModal}
                />



                <ul>
                    {navItems.map((navItem, index) =>{
                        return (
                            <li>
                                <Link to={navItem.path}>{navItem.title}</Link>
                                </li>
    
                        );
                    })}
                   
                </ul>

                <Pulse Pulse delay={1000} duration={2000} forever={true}>
                <div className="notification__container">
                    <div className="trigger__bar" onClick={toggleModal}> 
                    <span>Ongoing Application <img src={Arrow} alt="" /></span>
                    </div>
                    <div className="notification">
                        <img src={Notification} alt=""/>
                        </div>

                        {/* {!showTraining ? (
              <div className="application--container" onClick={toggleModal}>
                <span>Codegaminator 9.0</span>
              </div>
            ) : null} */}
                </div>
                </Pulse>
                
            </nav>   
        </div>
     );
}
 
export default Navbar;