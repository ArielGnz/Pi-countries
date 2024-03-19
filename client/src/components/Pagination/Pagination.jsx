import React from "react";
import './pagination.css';

function pagination({currentPage, setCurrentPage, page}){

    const next = () =>{
        if (currentPage !== page){
            setCurrentPage(currentPage + 1)
        };
    };

    const prev = () => {
        if (currentPage !== 1){
            setCurrentPage(currentPage - 1)
        };
    };


    return(
        <>
            <div className="container-pag">
                
                <button className="boton" onClick={prev}> Prev </button>

                <h3> {currentPage} / {page} </h3>

                <button className="boton" onClick={next}> Next </button>
                
            </div>
        </>
    )
}
    

export default pagination;