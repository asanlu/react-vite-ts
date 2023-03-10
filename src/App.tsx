import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Button } from "antd";
import Test from "@/pages/test";
import Yi from "@/pages/yi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* 添加routes */}
      <Routes>
        <Route path="/yi" element={<Yi />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <div>
        <Button type="primary" href="yi">去yi页面</Button>
        <Button>
          <Link to={"test"}>去test页面</Link>
        </Button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
