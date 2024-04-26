import { Link } from "react-router-dom";
//import "./Card.css";

function Card({country}) {

    const {image, name, continent, poblation, id} = country
    
    return (  
                  
            <div className='card shadow-xl w-80 h-50 rounded-lg' key={id}>
                <Link className="no-underline text-black " to={`/detail/${id}`}>
                    <img src={image} className='w-full h-60 rounded-lg' />
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 ">{name}</div>
                    <ul className="list-disc ">
                        <li>Continent: {continent}</li>
                        <li>Poblation: {poblation}</li>
                    </ul>
                    </div>
                </Link>
            </div>
          
    );
}

export default Card;
