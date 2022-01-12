import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar'
import Home from './pages/Home/index'
import Destinations from './pages/Destination/index'
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "destinations" element = {<Destinations />}/>
        <Route path="crew" element={<Crew/>}/>
        <Route path="technology" element = {<Technology />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;