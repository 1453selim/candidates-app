import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Canditates from "./components/Canditates";
import About from "./components/About";
import Detail from './components/Detail';


function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route index element={<Home />}/>
          <Route path="canditates/*" element={<Canditates />}/>
          <Route path="aboutus" element={<About />}/>
          
         
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;