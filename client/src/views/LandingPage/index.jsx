import { Link } from "react-router-dom";
import './index2.css';


function Landing(){
    return (
        <div className="landing">
            <Link to={`/home`}>
                <div className="bot">
                    <button className="boot">  INGRESAR  </button>
                </div>
            </Link>
        </div>
    );
}

export default Landing;