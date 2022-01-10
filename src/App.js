import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar'
import Home from './pages/Home/index'
import Destinations from './pages/Destination/index'
import Destination from "./pages/Destination/Destination";
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "destination" element = {<Destinations />}>
            <Route path = ":destination" element = {<Destination />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;