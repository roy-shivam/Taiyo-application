import Contacts from "./pages/contacts";
import ChartsAndMaps from "./pages/chartsAndMaps";
import SideBar from "./components/sideBar/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <main className="relative h-[100dvh] flex space-x-3">
        <Router>
          <SideBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="charts-and-maps" element={<ChartsAndMaps />} />
            </Routes>
          </div>
        </Router>
      </main>
    </>
  );
}

export default App;
