
import Card from "../Card/Card";
import "./Cards2.css";

function Cards({data}) {

    const countriesList = data;

    return (  
        <div className="cards-container" >
            {
                countriesList.map(country => <Card country = {country} key={country.name}/>)   
            }
        </div>
    );
}

export default Cards;