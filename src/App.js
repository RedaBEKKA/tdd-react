import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  const a = 3;
  const b = 4;
  let routes = useRoutes([{ path: "/login", element: <Login /> }]);
  return <div className="App">{routes}</div>;
  // return (
  //   <div className="App">
  //     <ul>
  //       <li>Apple</li>
  //       <li>Bannane</li>
  //       <li>Orange</li>
  //     </ul>
  //     <h1 data-testid="mytestid">Azul dina</h1>
  //     <span title="sum">{a + b}</span>

  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
  //   </div>
  // );
}

export default App;
