
import Navbar from "./Components/Navbar";
import Allsports from "./Components/Allsports";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Allsports />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </>
  );
};

export default App;

