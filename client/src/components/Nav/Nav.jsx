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

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-emerald-500 shadow-md">
            <svg
              className="h-5 w-5 text-white animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <Link
            to="/home"
            onClick={goHomeReset}
            className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent transition-opacity hover:opacity-90 dark:to-emerald-400"
          >
            Countries
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center rounded-lg p-2.5 text-muted-foreground hover:bg-muted/80 focus:ring-4 focus:ring-primary/10 transition-colors"
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5 text-amber-400 transition-transform hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m10.314 10.314l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M18.364 5.636l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-indigo-500 transition-transform hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2.5 text-muted-foreground hover:bg-muted/80 focus:ring-4 focus:ring-primary/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuVisible}
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation items / Form container */}
        <div
          className={`w-full flex-col gap-4 lg:flex lg:w-auto lg:flex-row lg:items-center ${
            menuVisible ? 'flex mt-4 pt-4 border-t border-border lg:mt-0 lg:pt-0 lg:border-none' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
            <Link
              to="/home"
              onClick={goHomeReset}
              className={`rounded-lg px-3 py-2 text-center text-sm font-semibold transition-all hover:bg-muted ${
                isActive('/home') || isActive('/')
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/create"
              onClick={() => setMenuVisible(false)}
              className={`rounded-lg px-3 py-2 text-center text-sm font-semibold transition-all hover:bg-muted ${
                isActive('/create')
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Create Activity
            </Link>

            {/* Desktop Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden rounded-lg p-2.5 text-muted-foreground hover:bg-muted/80 transition-colors focus:ring-4 focus:ring-primary/10 lg:inline-flex"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5 text-amber-400 transition-transform duration-500 hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m10.314 10.314l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M18.364 5.636l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-indigo-500 transition-transform duration-500 hover:-rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Search box form */}
          <form
            className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:w-auto"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full sm:min-w-[200px] lg:min-w-[240px]">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                value={searchString}
                onChange={handleChange}
                placeholder="Search country..."
                className="input-field w-full pl-10 pr-9 py-2 text-sm shadow-none bg-muted/40 border-transparent focus:bg-card focus:border-primary/50"
              />
              {searchString && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground/65 hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary py-2 text-sm shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
