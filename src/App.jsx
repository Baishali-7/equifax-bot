import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeadSection from "./components/HeadSection";
import Preview from "./pages/Preview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Preview />,
    },
  ]);
  return (
    <>
      <div className="app">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
