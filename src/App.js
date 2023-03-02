import React, { createContext, useContext, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";

import HomePage from "./components/Pages/Home/HomePage";
import AboutPage from "./components/Pages/About/AboutPage";
import ContactPage from "./components/Pages/Contact/ContactPage";
import ServerPage from "./components/Pages/Server/ServerPage";
import Layout from "./components/Layout/Layout";
import UsersPage from "./components/UserPage/UsersPage";
import User from "./components/UserPage/User";
// import Context from "./components/Context/Context";
// import Counter from "./components/counter/Counter";
// import Todolist from "./components/Todolist/Todolist";
// export const UserContext = createContext();

function App() {
  // const [user, setuser] = useState("Jack");

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/server" element={<ServerPage />} />
          <Route path="/user" element={<UsersPage />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
