import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Detail from "./Pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
