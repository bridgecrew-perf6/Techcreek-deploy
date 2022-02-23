import { Link } from "react-router-dom";
import location from "./Assests/ic_location.svg"



const HomePage = () => {
    return ( 
        <div className="home__container">

            
        <div className="text__section">
        <div className="text__content">
        <h1>Welcome <br />
            to the &lt;Creek /&gt;
        </h1>
        <p>
            TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State.
        </p>
        <Link to="/Membership"><button className='btn1'>Member Area</button></Link>
        </div>
        
        <div className="floating__address">
            <div className="location">
                <img src={location} alt="" />
            </div>
            <div>
            Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng

            <p>O9030003185, 09030003180</p>
            </div>
        </div>
        </div>
        </div>

                        

       
     );
}
 
export default HomePage;