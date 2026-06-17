import Home from './views/Home/Home';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';
import Landing from './views/LandingPage/index';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
    </div>
  );
}

function App() {
  const location = useLocation();
  const showNavAndFooter = location.pathname !== '/';

  return (
    <div className="flex min-h-screen flex-col">
      {showNavAndFooter && <Nav />}
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
