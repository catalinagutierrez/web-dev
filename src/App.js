import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
