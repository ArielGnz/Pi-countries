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
  }, [searchTerm, allCountries.length]);

  return (
    <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Explore Countries</h1>
          {searchTerm && (
            <p className="text-sm text-muted-foreground">
              Resultados para &quot;{searchTerm}&quot; ({allCountries.length})
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="continent-filter" className="filter-label">
              Continent
            </label>
            <select id="continent-filter" onChange={selectCont} className="select-field">
              <option value="" hidden>
                Select...
              </option>
              <option value="All">All</option>
              <option value="Asia">Asia</option>
              <option value="Americas">America</option>
              <option value="Africa">Africa</option>
              <option value="Antarctic">Antartida</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="alpha-order" className="filter-label">
              Order Alph
            </label>
            <select id="alpha-order" onChange={selectOrd} className="select-field">
              <option value="" hidden>
                Select...
              </option>
              <option value="As">Ascendente</option>
              <option value="Ds">Descendente</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="population-order" className="filter-label">
              Population
            </label>
            <select id="population-order" onChange={selectOrdPoblation} className="select-field">
              <option value="" hidden>
                Select...
              </option>
              <option value="As">Ascendente</option>
              <option value="Ds">Descendente</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="activity-filter" className="filter-label">
              Activity
            </label>
            <select id="activity-filter" onChange={selectActivity} className="select-field">
              <option value="" hidden>
                Select...
              </option>
              {allActivities.map((actividad) => (
                <option key={actividad.name} value={actividad.name}>
                  {actividad.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8">
        <Cards data={data} />
      </section>

      <section className="my-8">
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} page={page} />
      </section>
    </div>
  );
}

export default Home;
