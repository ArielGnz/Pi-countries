import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
//import { getCountries } from '../../redux/actions';
import { filterContinents, getOrder, poblationOrder, getActivities, filterActivity,  getCountries } from "../../redux/actions";

import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';

//import './Home1.css';

function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);
    const allActivities = useSelector((state)=>state.allActivities);

    //Pagination

    const dataQt = 8;
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexFin = currentPage * dataQt;
    const indexIni = indexFin - dataQt;
    const data = allCountries.slice(indexIni, indexFin);
    const page = Math.ceil(allCountries.length / dataQt)
        
    
    function selectCont(e){
        dispatch(filterContinents(e.target.value));
        setCurrentPage(1);
    }

    function selectOrd(e){
        dispatch(getOrder(e.target.value));
        setCurrentPage(1);
    }

    function selectOrdPoblation(e){
        dispatch(poblationOrder(e.target.value));
        setCurrentPage(1);
    }

    function selectActivity(e){
        dispatch(filterActivity(e.target.value , e.target.name));
        setCurrentPage(1);
    }

    useEffect(() =>{
        dispatch(getActivities())
    },[]);

    useEffect(() =>{
        dispatch(getCountries())
    }, [dispatch]);


    return (  

        <div className='flex p-3 '>
            
                <div className="h-screen w-20 sm:w-72">

                        <ul className="nav flex-column" data-bs-theme="dark">
                            
                            <li className="nav-item text-center">
                                <form className="max-w-sm mx-auto">
                                    <label className="block mb-2 text-xl font-medium text-black dark:text-white">Continent</label>
                                    <select onChange={selectCont} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" hidden></option>
                                        <option value="All">All</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Americas">America</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Antarctic">Antartida</option>
                                        <option value="Europe">Europe</option>
                                        <option value="Oceania">Oceania</option>
                                    </select>
                                </form>
                                
                            </li>
                            <li className="nav-item text-center pt-2">
                                <form className="max-w-sm mx-auto">
                                    <label className="block mb-2 text-xl font-medium text-black dark:text-white">Order Alphabetically</label>
                                    <select onChange={selectOrd} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" hidden></option>
                                    <option value="As">Ascendente</option>
                                    <option value="Ds">Descendente</option>
                                    </select>
                                </form>

                            </li>
                            <li className="nav-item text-center pt-2">
                                <form className="max-w-sm mx-auto">
                                    <label className="block mb-2 text-xl font-medium text-black dark:text-white">Order by Population</label>
                                    <select onChange={selectOrdPoblation} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" hidden></option>
                                    <option value="As">Ascendente</option>
                                    <option value="Ds">Descendente</option>
                                    </select>
                                </form>

                            </li>

                            <li className='text-center pt-2'>
                                <label className="block mb-2 text-xl font-medium text-black dark:text-white">Activity</label>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={selectActivity}>
                                    <option value=""hidden></option>
                                    {allActivities.map((actividad) => (
                                        <option key={actividad.name} value={actividad.name}>
                                            {actividad.name}
                                        </option>
                                    ))}
                                </select>
                            </li>
                        </ul>
                    
                </div>

                    
                    <div className='flex flex-col h-screen w-full pl-20'>
                        <div><Cards data={data} /></div>
                        <div className='p-4'><Pagination setCurrentPage = {setCurrentPage} currentPage = {currentPage} page = {page} /></div>
                    </div>
        </div>


            
        
      
    );
}

export default Home;