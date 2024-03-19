import Landing from './views/LandingPage/index';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    
      <div className='content'>
      
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<Error />} />
            
        </Routes>
      </div>
        
      
    </>
  )
}

export default App;
