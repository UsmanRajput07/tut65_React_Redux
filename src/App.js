import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
