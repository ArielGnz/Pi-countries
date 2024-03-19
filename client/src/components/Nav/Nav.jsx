import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterContinents, getOrder, poblationOrder, getActivities, filterActivity } from "../../redux/actions";
import './Nav2.css';


function Nav({ handleChange, handleSubmit }){
    const allActivities = useSelector((state)=>state.allActivities);
    const dispatch = useDispatch();
    
    function selectCont(e){
        dispatch(filterContinents(e.target.value));
    }

    function selectOrd(e){
        dispatch(getOrder(e.target.value));
    }

    function selectOrdPoblation(e){
        dispatch(poblationOrder(e.target.value));
    }

    function selectActivity(e){
        dispatch(filterActivity(e.target.value , e.target.name));
    }

    useEffect(() =>{
        dispatch(getActivities())
    },[])

    return (  

        <div className='navbar'>
        
            <div className='search-box'>
                <form onChange={handleChange}>
                    <input placeholder='Buscar' />                
                </form>
                <button type='submit' onClick={handleSubmit}>Buscar</button>
           </div>

            <span> Continent </span>
            <select onChange={selectCont}> 
                <option value="All">All</option>
                <option value="Asia">Asia</option>
                <option value="Americas">America</option>
                <option value="Africa">Africa</option>
                <option value="Antarctic">Antartida</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

            <span> Order Alphabetically </span>
            <select onChange={selectOrd}>
                <option value="" hidden></option>
                <option value="As">Ascendente</option>
                <option value="Ds">Descendente</option>
            </select>

            <span> Order by Population </span>
            <select onChange={selectOrdPoblation}>
                <option value="" hidden></option>
                <option value="As">Ascendente</option>
                <option value="Ds">Descendente</option>
            </select>

            <span> Activity </span>

            <select onChange={selectActivity}>
                <option value=""hidden></option>
                {allActivities.map((actividad) => (
                    <option key={actividad.name} value={actividad.name}>
                        {actividad.name}
                    </option>
                ))}

            </select>

            <div>
                <Link to='/home'>
                    <button className="btn">  Home  </button>
                </Link>
                    
                <Link to='/create'>
                    <button className="btn">  Create  </button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;