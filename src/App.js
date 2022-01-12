import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar'
import Home from './pages/Home/index'
import Destinations from './pages/Destination/index'
import Crew from "./pages/Crew";
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "destinations" element = {<Destinations />}/>
        <Route path="crew" element={<Crew/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;