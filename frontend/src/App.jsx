import { BrowserRouter, Routes, Route } from "react-router-dom";
//component
import Signup from "./componetns/Signup";
import Login from "./componetns/Login";
import Home from "./componetns/Home";
import Success from "./componetns/Success";
//component

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
