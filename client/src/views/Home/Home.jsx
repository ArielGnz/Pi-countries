import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterContinents,
  getOrder,
  poblationOrder,
  getActivities,
  filterActivity,
  getCountries,
} from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const allActivities = useSelector((state) => state.allActivities);
  const searchTerm = useSelector((state) => state.searchTerm);
  const filterContinent = useSelector((state) => state.filterContinent);
  const filterAct = useSelector((state) => state.filterAct);
  const alphaOrder = useSelector((state) => state.alphaOrder);
  const populationOrder = useSelector((state) => state.populationOrder);

  const dataQt = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexFin = currentPage * dataQt;
  const indexIni = indexFin - dataQt;
  const data = allCountries.slice(indexIni, indexFin);
  const page = Math.ceil(allCountries.length / dataQt);

  function selectCont(e) {
    dispatch(filterContinents(e.target.value));
    setCurrentPage(1);
  }

  function selectOrd(e) {
    dispatch(getOrder(e.target.value));
    setCurrentPage(1);
  }

  function selectOrdPoblation(e) {
    dispatch(poblationOrder(e.target.value));
    setCurrentPage(1);
  }

  function selectActivity(e) {
    dispatch(filterActivity(e.target.value, e.target.name));
    setCurrentPage(1);
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterContinent, filterAct, alphaOrder, populationOrder]);

  const activeFilters = [];
  if (filterContinent && filterContinent !== 'All') {
    activeFilters.push({
      id: 'continent',
      label: `Continent: ${filterContinent}`,
      clear: () => dispatch(filterContinents('All')),
    });
  }
  if (filterAct && filterAct !== 'All') {
    activeFilters.push({
      id: 'activity',
      label: `Activity: ${filterAct}`,
      clear: () => dispatch(filterActivity('All')),
    });
  }
  if (alphaOrder) {
    activeFilters.push({
      id: 'alpha',
      label: `Alphabetical: ${alphaOrder === 'As' ? 'A-Z' : 'Z-A'}`,
      clear: () => dispatch(getOrder('')),
    });
  }
  if (populationOrder) {
    activeFilters.push({
      id: 'population',
      label: `Population: ${populationOrder === 'As' ? 'Low-High' : 'High-Low'}`,
      clear: () => dispatch(poblationOrder('')),
    });
  }

  return (
    <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
      {/* Title & Search Results Info */}
      <div className="relative mb-6 overflow-hidden rounded-3xl bg-card/50 p-4 shadow-sm sm:p-6">
        <div className="pointer-events-none absolute -top-6 right-6 hidden h-24 w-24 rounded-full bg-primary/20 blur-2xl lg:block" />
        <div className="pointer-events-none absolute top-6 right-10 hidden animate-pulse text-3xl text-primary/70 lg:block">
          ✨
        </div>
        <div className="relative flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Descubre el Mundo
          </h1>
          {searchTerm ? (
            <p className="text-sm font-medium text-muted-foreground bg-muted/65 px-3 py-1.5 rounded-full">
              Results for &quot;<span className="text-primary font-bold">{searchTerm}</span>&quot; ({allCountries.length})
            </p>
          ) : (
            <p className="text-sm font-medium text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-full">
              Total countries: <span className="text-foreground font-semibold">{allCountries.length}</span>
            </p>
          )}
        </div>
        <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
          Un pequeño toque visual para que la página se sienta más viva mientras exploras países y actividades.
        </p>
      </div>

      {/* Filter / Sort Control Dashboard */}
      <section className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 shadow-sm sm:p-6 transition-all hover:shadow-md">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Continent Filter */}
          <div className="flex flex-col gap-2">
            <label htmlFor="continent-filter" className="filter-label flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2 2 0 002-2V7.5C19 6.12 17.88 5 16.5 5c-1.38 0-2.5-1.12-2.5-2.5V3m-3.95 19.95A9 9 0 1122 12c0 2.485-.9 4.761-2.386 6.51" />
              </svg>
              Continent
            </label>
            <select
              id="continent-filter"
              value={filterContinent || ''}
              onChange={selectCont}
              className="select-field"
            >
              <option value="" hidden>
                Select continent
              </option>
              <option value="All">All continents</option>
              <option value="Asia">Asia</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Antarctic">Antarctica</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

          {/* Alphabetical Order */}
          <div className="flex flex-col gap-2">
            <label htmlFor="alpha-order" className="filter-label flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Order Alphabetical
            </label>
            <select
              id="alpha-order"
              value={alphaOrder || ''}
              onChange={selectOrd}
              className="select-field"
            >
              <option value="" hidden>
                Select order
              </option>
              <option value="As">A - Z (Ascending)</option>
              <option value="Ds">Z - A (Descending)</option>
            </select>
          </div>

          {/* Population Order */}
          <div className="flex flex-col gap-2">
            <label htmlFor="population-order" className="filter-label flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Population Size
            </label>
            <select
              id="population-order"
              value={populationOrder || ''}
              onChange={selectOrdPoblation}
              className="select-field"
            >
              <option value="" hidden>
                Select size
              </option>
              <option value="As">Ascending (Low-High)</option>
              <option value="Ds">Descending (High-Low)</option>
            </select>
          </div>

          {/* Activity Filter */}
          <div className="flex flex-col gap-2">
            <label htmlFor="activity-filter" className="filter-label flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Tourist Activity
            </label>
            <select
              id="activity-filter"
              value={filterAct || ''}
              onChange={selectActivity}
              className="select-field"
            >
              <option value="" hidden>
                Select activity
              </option>
              <option value="All">All activities</option>
              {allActivities.map((actividad) => (
                <option key={actividad.name} value={actividad.name}>
                  {actividad.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFilters.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/60">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide self-center mr-1">
              Active filters:
            </span>
            {activeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={filter.clear}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {filter.label}
                <svg className="h-3.5 w-3.5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ))}
            <button
              onClick={() => dispatch(resetHome())}
              className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors duration-200 self-center ml-auto px-2 py-1"
            >
              Reset All
            </button>
          </div>
        )}
      </section>

      {/* Grid of Countries */}
      <section className="mt-8">
        <Cards data={data} />
      </section>

      {/* Pagination component */}
      <section className="my-10">
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} page={page} />
      </section>
    </div>
  );
}

export default Home;
