
import Card from "../Card/Card";
//import "./Cards2.css";

function Cards({data}) {

    const countriesList = data;

   
    //"flex flex-wrap h-screen"
    return (  
        <div className="grid grid-cols-1 md:grid-cols-4" >
        {
            countriesList.map(country => <Card country = {country} key={country.name}/>)   
        }
        </div>
       
    );
}

export default Cards;