import { Link } from "react-router-dom";
import "./Card2.css";

function Card({country}) {

    const {image, name, continent, poblation, id} = country
    return (  
        <div className="card-container" key={id}>
            <Link to={`/detail/${id}`}>
                <img src={image} alt='' />
                <h2>{name}</h2>
                <h2>{continent}</h2>
                <h2>{poblation}</h2>
                
                
            </Link>
         
        </div>
        
    );
}

export default Card;
