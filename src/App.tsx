import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.styl";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";

function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation().pathname;
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    if (location === "/") setBgClass("home");
    if (location === "/destination") setBgClass("destination");
    if (location === "/crew") setBgClass("crew");
    if (location === "/technology") setBgClass("technology");
  }, [location]);

  return <div className={`bg-container ${bgClass}`}>{children}</div>;
}

function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
