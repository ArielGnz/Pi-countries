import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getName } from '../../redux/actions';

import Nav from '../../components/Nav/Nav';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';

import './Home1.css';

function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const [searchString, setSearchString] = useState("");

    //Pagination

    const dataQt = 10;
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexFin = currentPage * dataQt;
    const indexIni = indexFin - dataQt;

    const data = allCountries.slice(indexIni, indexFin);
    const page = Math.ceil(allCountries.length / dataQt)
        

    function handleChange(e){
        e.preventDefault();
        setSearchString(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getName(searchString))
    }

    useEffect(() =>{
        dispatch(getCountries())
    }, [dispatch]);

    return (  
        <div className='home-container'>
            
            <Nav handleChange={handleChange} handleSubmit={handleSubmit} />
            
            <Cards data={data} />
            <Pagination setCurrentPage = {setCurrentPage} currentPage = {currentPage} page = {page} />
            
        </div>
    );
}

export default Home;