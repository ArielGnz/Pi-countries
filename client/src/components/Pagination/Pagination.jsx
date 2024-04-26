import React from "react";
//import './pagination.css';

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
            <div className="flex justify-center">
                
                <button className="border-solid border-4 border-sky-700 hover:border-indigo-300 px-4 rounded-md mx-3" onClick={prev}> Prev </button>

                <button className="border-solid border-4 border-sky-700 hover:border-indigo-300 px-4 rounded-md mx-3"> {currentPage} / {page} </button>

                <button className="border-solid border-4 border-sky-700 hover:border-indigo-300 px-4 rounded-md mx-3" onClick={next}> Next </button>
                
            </div>
        </>
    )
}
    

export default pagination;