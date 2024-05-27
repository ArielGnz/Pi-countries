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

        <div className='flex flex-col w-full m-auto '>
            
            <div className='w-full m-auto justify-center'>
                
                    <div className='flex flex-row justify-around mt-0 p-4 bg-sky-100'>  
                        <div className='text-center font-bold'>
                            <label className='mx-2'>Continent</label>
                            <select onChange={selectCont} className='w-[110px] border-2 border-slate-500 rounded-md lg:w-[180px]'>
                                <option value="" hidden></option>
                                <option value="All">All</option>
                                <option value="Asia">Asia</option>
                                <option value="Americas">America</option>
                                <option value="Africa">Africa</option>
                                <option value="Antarctic">Antartida</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>     
                        </div>

                        <div  className='text-center font-bold'>
                            <label  className='mx-2'>Order Alph</label>
                            <select onChange={selectOrd} className='w-[110px] border-2 border-slate-500 rounded-md lg:w-[180px]'>
                            <option value="" hidden></option>
                            <option value="As">Ascendente</option>
                            <option value="Ds">Descendente</option>
                            </select>
                        </div>

                        <div className='text-center font-bold'>
                            <label  className='mx-2'>Population</label>
                            <select onChange={selectOrdPoblation} className='w-[110px] border-2 border-slate-500 rounded-md lg:w-[180px]'>
                            <option value="" hidden></option>
                            <option value="As">Ascendente</option>
                            <option value="Ds">Descendente</option>
                            </select>
                        </div>

                        <div className='text-center font-bold'>
                            <label className='mx-2'>Activity</label>
                            <select onChange={selectActivity} className='w-[110px] border-2 border-slate-500 rounded-md lg:w-[180px]'>
                                <option value=""hidden></option>
                                {allActivities.map((actividad) => (
                                    <option key={actividad.name} value={actividad.name}>
                                        {actividad.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                
                <div className='mt-4 ml-4'>
                    <Cards data={data} />
                </div>

            </div>


            <div className='my-4 font-bold text-xl'>
                <Pagination setCurrentPage = {setCurrentPage} currentPage = {currentPage} page = {page} />
            </div>
                    
        </div>
      
    );
}

export default Home;