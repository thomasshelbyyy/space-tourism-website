import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Destination from "./routes/Destination";
import data from "./assets/data.json"
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination destinations={data.destinations} />} />
          <Route path="/crew" element={<Crew crews={data.crew} />} />
          <Route path="/technology" element={<Technology technologies={data.technology} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
