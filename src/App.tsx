import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./_Variables.scss";
import { allRoutes } from "./pages/home/routes";
function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {allRoutes.map((route, i) => (
            <Route path={route.href} element={route.element} key={i} />
          ))}
          {/* <Route path='/series' element={<SeriesSearchPage />} />
          <Route path='/watch-later' element={<AiSurveyPage />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
