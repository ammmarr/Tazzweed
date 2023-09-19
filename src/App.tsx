import "./_Variables.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { mainRoutes } from "./pages/home/routes";

function App() {
  return (
    <>
      <Routes>
        {mainRoutes.map((route, i) => (
          <Route path={route.href} element={route.element} key={i} />
        ))}
        {/* <Route path='/series' element={<SeriesSearchPage />} />
          <Route path='/watch-later' element={<AiSurveyPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
