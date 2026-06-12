import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getName } from '../../redux/actions';

function Nav() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getName(searchString));
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
            className="text-xl font-bold tracking-tight text-primary-foreground transition-opacity hover:opacity-80"
          >
            Countries
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-primary-foreground/40 p-2 text-primary-foreground hover:bg-primary-foreground/10 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuVisible}
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`w-full flex-col gap-4 lg:flex lg:w-auto lg:flex-row lg:items-center ${
            menuVisible ? 'flex' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <Link
              to="/home"
              className="rounded-md px-3 py-2 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:text-base"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="rounded-md px-3 py-2 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:text-base"
            >
              Create
            </Link>
          </div>

          <form
            className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:w-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              value={searchString}
              onChange={handleChange}
              placeholder="Buscar país..."
              className="input-field w-full text-foreground sm:min-w-[180px] lg:min-w-[220px]"
            />
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
