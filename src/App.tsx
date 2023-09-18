import "./_Variables.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/series' element={<SeriesSearchPage />} />
          <Route path='/watch-later' element={<AiSurveyPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
