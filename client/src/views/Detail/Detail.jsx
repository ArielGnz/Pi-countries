import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getDetail } from '../../redux/actions';
import { Link } from "react-router-dom";

import './detail2.css';

function Detail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);


    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch]);
    return (  
    
        <>

            <div className="container-detail" >
                    <img className = "image"  src={detail.image} alt='' />
                    <h3>ID: {detail.id}</h3>
                    <h3>NAME: {detail.name}</h3>
                    <h3>CONTINENT: {detail.continent}</h3>
                    <h3>CAPITAL:{detail.capital}</h3>
                    <h3>AREA: {detail.area}</h3>
                    <h3>SUBREGION: {detail.subregion}</h3>
                    <h3>POBLATION: {detail.poblation}</h3>
                    <Link to='/home'><button className='button'>  Home  </button></Link>  
      
            </div>
        </>  
        
    );
}

export default Detail;