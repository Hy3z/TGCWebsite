import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import NavBar from "./Components/NavBar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import NotFound from "./Page/NotFound";
import CSSL from "./Page/CSSL";
import IPPT from "./Page/IPPT";
import LanFoyer from "./Page/LanFoyer";
import FAQ from "./Page/FAQ";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="event">
          <Route path="cssl" element={<CSSL />} />
          <Route path="ipptournament" element={<IPPT />} />
          <Route path="lanfoyer" element={<LanFoyer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
