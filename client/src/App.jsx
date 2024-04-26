import Landing from './views/LandingPage/index';
import Home from './views/Home/Home';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

//<div className='bg-black'><Footer /></div>
function App() {

  return (
    <>
    
      <div className="flex flex-col">
        <div><Nav /></div>
        <div className='h-screen flex-grow'>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/create' element={<Create />} />
              <Route path='*' element={<Error />} />
          </Routes>
        </div>
        
      </div>
        
      
    </>
  )
}

export default App;
