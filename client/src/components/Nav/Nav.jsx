import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetHome, searchCountries } from '../../redux/actions';
import { useTheme } from '../../hooks/useTheme';

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state) => state.searchTerm);
  const [searchString, setSearchString] = useState(searchTerm);
  const [menuVisible, setMenuVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setSearchString(searchTerm);
  }, [searchTerm]);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function goHomeReset(e) {
    e?.preventDefault?.();
    setSearchString('');
    dispatch(resetHome());
    setMenuVisible(false);
    navigate('/home');
  }

  function runSearch(term) {
    dispatch(searchCountries(term));

    if (location.pathname !== '/home' && location.pathname !== '/') {
      navigate('/home');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    runSearch(searchString);
    setMenuVisible(false);
  }

  function handleClear() {
    setSearchString('');
    runSearch('');
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-primary shadow-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <svg
            className="h-8 w-8 fill-primary-foreground"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <Link
            to="/home"
            onClick={goHomeReset}
            className="text-xl font-bold tracking-tight text-primary-foreground transition-opacity hover:opacity-80"
          >
            Countries
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center rounded-md border border-primary-foreground/40 p-2 text-primary-foreground hover:bg-primary-foreground/10"
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m10.314 10.314l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M18.364 5.636l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="inline-flex items-center rounded-md border border-primary-foreground/40 p-2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuVisible}
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-col gap-4 lg:flex lg:w-auto lg:flex-row lg:items-center ${
            menuVisible ? 'flex' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/home"
              onClick={goHomeReset}
              className="rounded-md px-3 py-2 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:text-base"
            >
              Home
            </Link>
            <Link
              to="/create"
              onClick={() => setMenuVisible(false)}
              className="rounded-md px-3 py-2 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:text-base"
            >
              Create
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              className="hidden rounded-md border border-primary-foreground/40 p-2 text-primary-foreground hover:bg-primary-foreground/10 lg:inline-flex"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m10.314 10.314l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M18.364 5.636l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>

          <form
            className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:w-auto"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full sm:min-w-[180px] lg:min-w-[220px]">
              <input
                type="search"
                value={searchString}
                onChange={handleChange}
                placeholder="Buscar país..."
                className="input-field w-full pr-9"
              />
              {searchString && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Limpiar búsqueda"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary-foreground/90 sm:w-auto"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
