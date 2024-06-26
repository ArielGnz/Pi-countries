import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getName } from "../../redux/actions";
//import './Nav2.css';


function Nav({ handleChange, handleSubmit }){
    //const allActivities = useSelector((state)=>state.allActivities);
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState("");

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    function handleChange(e){
        e.preventDefault();
        setSearchString(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getName(searchString))
    }

    return (  

        <nav className="flex flex-row items-center justify-between flex-wrap bg-sky-700 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <Link to='/home'><button className="font-semibold text-xl tracking-tight text-white">Countries</button></Link>
          </div>

          <div className="block lg:hidden">
            <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={toggleMenu}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          
          <div id='menu' className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuVisible ? 'flex' : 'hidden'}`}>
            <div className='flex my-auto text-sm lg:flex-grow'>
              
                <Link to='/home'><button className="p-2 font-semibold text-lg lg:text-xl tracking-tight text-white"> Home </button></Link>  
            
                <Link to='/create'><button className="p-2 font-semibold text-lg lg:text-xl tracking-tight text-white">  Create  </button></Link>
              
            </div>
            <div className="flex">
                <input onChange={handleChange} placeholder='Buscar' className="w-[100px] lg:w-[200px] inline-block text-sm px-4 py-2 border rounded text-black border-white text-black lg:h-[40px] my-auto mx-2"/>
                <button type='submit' onClick={handleSubmit} className="p-2 font-semibold text-lg lg:text-xl tracking-tight text-white" >Buscar</button> 
            </div>
          </div>

        </nav>
    );

   

}

export default Nav;