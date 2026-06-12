
import { FILTER_CONTINENTS, GET_COUNTRIES, GET_DETAIL, GET_NAME, GET_ORDER, POBLATION_ORDER, GET_ACTIVITIES, FILTER_ACTIVITY, SEARCH_COUNTRIES, RESET_HOME } from "./action-types";

const initialState = {
    continents: [],
    allCountries:[],
    name:[],
    detail:[],
    allActivities:[],
    CountriesAux: [],
    filterContinent: false,
    filterAct: false,
    alphaOrder: false,
    populationOrder: false,
    searchTerm: ''
}

const applyFilters = (countries, { continent, activity, searchTerm }) => {
    let result = [...countries];

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        result = result.filter((country) =>
            country.name.toLowerCase().includes(term)
        );
    }

    if (continent && continent !== 'All') {
        result = result.filter((country) => country.continent === continent);
    }

    if (activity && activity !== 'All') {
        result = result.filter((country) =>
            country.Activities?.some((act) => act.name === activity)
        );
    }

    return result;
};

const rootReducer = (state = initialState, {type, payload}) => {

    const filterState = {
        continent: state.filterContinent,
        activity: state.filterAct,
        searchTerm: state.searchTerm,
    };

    switch(type){

        case GET_COUNTRIES:
            return {
                ...state,
                continents: payload,
                CountriesAux: payload,
                allCountries: applyFilters(payload, filterState),
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

        case SEARCH_COUNTRIES:
            return {
                ...state,
                searchTerm: payload,
                allCountries: applyFilters(state.CountriesAux, {
                    ...filterState,
                    searchTerm: payload,
                }),
            };

        case RESET_HOME:
            return {
                ...state,
                allCountries: [...state.continents],
                filterContinent: false,
                filterAct: false,
                alphaOrder: false,
                populationOrder: false,
                searchTerm: '',
            };

        case GET_DETAIL:
            return {
                ...state,
                detail: payload,
            }

        case FILTER_CONTINENTS:
            
            if (payload === 'All'){
                return {
                    ...state,
                    allCountries: applyFilters(state.CountriesAux, {
                        ...filterState,
                        continent: false,
                    }),
                    filterContinent: false
                }
            }

            return {
                ...state,
                allCountries: applyFilters(state.CountriesAux, {
                    ...filterState,
                    continent: payload,
                }), 
                filterContinent: payload
            }

        case FILTER_ACTIVITY:
  
            if (payload === "All") {
        
                return {
                    ...state,
                    allCountries: applyFilters(state.CountriesAux, {
                        ...filterState,
                        activity: false,
                    }), 
                    filterAct: false
                };
            }
        
            return{
                ...state,
                allCountries : applyFilters(state.CountriesAux, {
                    ...filterState,
                    activity: payload,
                }),
                filterAct: payload
            }
        
        case GET_ORDER: 

            let ordenAlf = [...state.allCountries];

            return {
                ...state,
                alphaOrder: payload,
                allCountries: ordenAlf.sort((a, b) => {
                    return payload === 'As' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                })
            }

        case POBLATION_ORDER:
            let ordenPoblation = [...state.allCountries]
            return {
                ...state,
                populationOrder: payload,
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
