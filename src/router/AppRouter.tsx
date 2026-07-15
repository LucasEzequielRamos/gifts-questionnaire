import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Intro from "../pages/Intro";
import Name from "../pages/Name";
import Assessment from "../pages/Assessment";
import Processing from "../pages/Processing";
import Results from "../pages/Results";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/name" element={<Name />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}
