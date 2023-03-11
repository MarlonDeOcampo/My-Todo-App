import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./componets/layout/layout";

// lazy
const Home = lazy(() => import("./pages/home.page"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Suspense fallback={<div>loading ...</div>}>
        <Routes>
          <Route path="/main" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
