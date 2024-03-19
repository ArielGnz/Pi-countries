
import { FILTER_CONTINENTS, GET_COUNTRIES, GET_DETAIL, GET_NAME, GET_ORDER, POBLATION_ORDER, GET_ACTIVITIES, FILTER_ACTIVITY } from "./action-types";

const initialState = {
    continents: [],
    allCountries:[],
    detail:[],
    allActivities:[],
    CountriesAux: [],
    filterContinent: false,
    filterAct: false 
}

const rootReducer = (state = initialState, {type, payload}) => {

    const filtros = (byFilterContinent, byFilterAct) => {
        
        let filterAllCopy = [...state.CountriesAux]

        if(byFilterContinent && byFilterContinent !== 'All'){
            filterAllCopy = filterAllCopy.filter((country) => country.continent === byFilterContinent)
        }

        if (byFilterAct && byFilterAct !== 'All'){
            filterAllCopy = filterAllCopy.filter((c)=> c.Activities.find((ca)=>ca.name === payload))
        }
        return filterAllCopy;
    }

    switch(type){

        case GET_COUNTRIES:
            
            return {
                ...state,
                allCountries: payload,
                continents: payload,
                CountriesAux: payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                allActivities: payload,
               
        }

        case GET_NAME:

            return {
                ...state,
                allCountries: payload,
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: payload,
            }

        case FILTER_CONTINENTS:
            
            const copyCont = [...state.continents];

            if (payload === 'All'){
                return {
                    ...state,
                    allCountries: copyCont,
                    filterContinent: false
                }
            }

            let filteredCont = filtros(payload, state.filterAct) 
            // let filteredCont = copyCont.filter(function(filtroCont){
            //     return filtroCont.continent === payload});
             
            return {
                ...state,
                allCountries: filteredCont, 
                filterContinent: payload
            }

        case FILTER_ACTIVITY:
  
            if (payload === "All") {
        
                return {
                    ...state,
                    allCountries: state.continents, 
                    filterAct: false
                };
            }

            let filtered2 = filtros(state.filterContinent, payload)
            // let copy2 = [...state.allCountries]
        
            // let filtered2 = copy2.filter((c)=> c.Activities.find((ca)=>ca.name === payload))
        
            return{
                ...state,
                allCountries : filtered2,
                filterAct: payload
            }
        
        case GET_ORDER: 

            let ordenAlf = [...state.allCountries];

            return {
                ...state,
                allCountries: ordenAlf.sort((a, b) => {
                    return payload === 'As' ? a.name.charCodeAt(0) - b.name.charCodeAt(0) : b.name.charCodeAt(0) - a.name.charCodeAt(0);
                })
            }

        case POBLATION_ORDER:
            let ordenPoblation = [...state.allCountries]
            return {
                ...state,
                allCountries: ordenPoblation.sort((a,b) => {
                    return payload === 'As' ? a.poblation - b.poblation : b.poblation - a.poblation;
                })
            }


        default:
            return {
                ...state
            }

    }
};

export default rootReducer;