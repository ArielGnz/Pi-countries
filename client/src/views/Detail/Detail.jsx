import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getDetail } from '../../redux/actions';
import { Link } from "react-router-dom";

//import './detail2.css';

function Detail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);


    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch]);
    return (  
    
        <div className="flex justify-content-center">

            <div className='card shadow-lg mt-10 w-96' key={id}>
               
                    <img src={detail.image} className='w-full h-60' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 ">{detail.name}</div>
                            <ul className="list-disc">
                                <li>Id: {detail.id}</li>
                                <li>Continent: {detail.continent}</li>
                                <li>Poblation: {detail.poblation}</li>
                                <li>Capital: {detail.capital}</li>
                                <li>Area: {detail.area}</li>
                                <li>Subregion: {detail.subregion}</li>
                                
                            </ul>
                    </div>
                
            </div>
        </div>  
          
    );
}

export default Detail;