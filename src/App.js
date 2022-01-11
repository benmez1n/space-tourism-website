import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar'
import Home from './pages/Home/index'
import Destinations from './pages/Destination/index'
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "destinations" element = {<Destinations />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;