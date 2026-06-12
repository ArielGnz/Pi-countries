import Home from './views/Home/Home';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';
import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
